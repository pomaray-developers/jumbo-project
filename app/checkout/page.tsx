"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { formatCurrency } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const { user, isAuthenticated } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    email: user?.email || "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    paymentMethod: "credit-card",
    saveInfo: true,
  })

  const subtotal = items.reduce((total, item) => {
    const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
    return total + price * item.quantity
  }, 0)

  const shipping = subtotal > 50 ? 0 : 5
  const total = subtotal + shipping

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, saveInfo: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isAuthenticated) {
      toast({
        title: "Inicia sesión para continuar",
        description: "Debes iniciar sesión para proceder con el pago.",
      })
      router.push("/login")
      return
    }

    setIsProcessing(true)

    // Simulación de procesamiento de pago
    setTimeout(() => {
      const orderId = Math.floor(100000 + Math.random() * 900000)
      clearCart()

      // Guardar en sessionStorage para el seguimiento
      sessionStorage.setItem(
        "lastOrder",
        JSON.stringify({
          id: orderId,
          date: new Date().toISOString(),
          items,
          total,
          status: "processing",
        }),
      )

      toast({
        title: "¡Pedido realizado con éxito!",
        description: `Tu pedido #${orderId} ha sido procesado correctamente.`,
      })

      router.push(`/seguimiento/${orderId}`)
    }, 2000)
  }

  if (items.length === 0) {
    router.push("/carrito")
    return null
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Información de Contacto</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Dirección de Envío</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">Estado/Provincia</Label>
                        <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Código Postal</Label>
                        <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Método de Pago</h2>

                  <RadioGroup value={formData.paymentMethod} onValueChange={handleRadioChange} className="space-y-3">
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        Tarjeta de Crédito/Débito
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        PayPal
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                      <Label htmlFor="bank-transfer" className="flex-1 cursor-pointer">
                        Transferencia Bancaria
                      </Label>
                    </div>
                  </RadioGroup>

                  {formData.paymentMethod === "credit-card" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Número de Tarjeta</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Fecha de Expiración</Label>
                          <Input id="expiry" placeholder="MM/AA" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="save-info" checked={formData.saveInfo} onCheckedChange={handleCheckboxChange} />
                  <Label htmlFor="save-info">Guardar esta información para futuras compras</Label>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isProcessing}>
                  {isProcessing ? "Procesando..." : `Pagar ${formatCurrency(total)}`}
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>

                <div className="space-y-4">
                  <div className="max-h-[300px] overflow-y-auto space-y-3">
                    {items.map((item) => {
                      const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price

                      return (
                        <div key={item.id} className="flex justify-between">
                          <div className="flex-1">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-gray-500 ml-1">x{item.quantity}</span>
                          </div>
                          <span>{formatCurrency(price * item.quantity)}</span>
                        </div>
                      )
                    })}
                  </div>

                  <Separator />

                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Envío</span>
                    <span>{shipping === 0 ? "Gratis" : formatCurrency(shipping)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
