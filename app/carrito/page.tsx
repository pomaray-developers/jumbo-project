"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { formatCurrency } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { toast } from "@/hooks/use-toast"

export default function CartPage() {
  const router = useRouter()
  const { items, updateItemQuantity, removeItem, clearCart } = useCart()
  const { isAuthenticated } = useAuth()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  const subtotal = items.reduce((total, item) => {
    const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
    return total + price * item.quantity
  }, 0)

  const shipping = subtotal > 50 ? 0 : 5
  const total = subtotal + shipping

  const handleApplyCoupon = () => {
    setIsApplyingCoupon(true)

    // Simulación de aplicación de cupón
    setTimeout(() => {
      toast({
        title: "Cupón inválido",
        description: "El código de cupón ingresado no es válido o ha expirado.",
        variant: "destructive",
      })
      setIsApplyingCoupon(false)
    }, 1000)
  }

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast({
        title: "Inicia sesión para continuar",
        description: "Debes iniciar sesión para proceder con el pago.",
      })
      router.push("/login")
      return
    }

    router.push("/checkout")
  }

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-medium mb-2">Tu carrito está vacío</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Parece que aún no has añadido productos a tu carrito.
              </p>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/productos">Explorar productos</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Producto</TableHead>
                      <TableHead>Descripción</TableHead>
                      <TableHead className="text-right">Precio</TableHead>
                      <TableHead className="text-center">Cantidad</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => {
                      const price = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
                      const itemTotal = price * item.quantity

                      return (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="relative h-20 w-20 rounded overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            {item.discount > 0 ? (
                              <div>
                                <span className="font-medium text-red-600">{formatCurrency(price)}</span>
                                <span className="text-sm text-gray-500 line-through ml-1">
                                  {formatCurrency(item.price)}
                                </span>
                              </div>
                            ) : (
                              <span className="font-medium">{formatCurrency(price)}</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center justify-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">Disminuir cantidad</span>
                              </Button>
                              <span className="w-8 text-center mx-2">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">Aumentar cantidad</span>
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-medium">{formatCurrency(itemTotal)}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-gray-500"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Eliminar</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => clearCart()}>
                  Vaciar carrito
                </Button>
                <Button asChild>
                  <Link href="/productos">Continuar comprando</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>

                <div className="space-y-4">
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

                  <div className="pt-4">
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Código de cupón"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handleApplyCoupon} disabled={!couponCode || isApplyingCoupon}>
                        {isApplyingCoupon ? "Aplicando..." : "Aplicar"}
                      </Button>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700" onClick={handleCheckout}>
                      Proceder al pago
                    </Button>
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
