"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/hooks/use-auth"
import { toast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    if (user) {
      setProfileData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }))
    }
  }, [isAuthenticated, router, user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de actualización de perfil
    setTimeout(() => {
      toast({
        title: "Perfil actualizado",
        description: "Tu información ha sido actualizada correctamente.",
      })
      setIsLoading(false)
    }, 1000)
  }

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  // Historial de pedidos simulado
  const orders = [
    {
      id: "123456",
      date: "2023-04-15",
      total: 78.95,
      status: "Entregado",
    },
    {
      id: "123457",
      date: "2023-03-22",
      total: 45.5,
      status: "Entregado",
    },
    {
      id: "123458",
      date: "2023-02-10",
      total: 124.75,
      status: "Entregado",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Mi Cuenta</h1>

          <Tabs defaultValue="profile" className="space-y-8">
            <TabsList className="w-full justify-start border-b rounded-none">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="orders">Mis Pedidos</TabsTrigger>
              <TabsTrigger value="addresses">Direcciones</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>Actualiza tu información personal y de contacto</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" name="name" value={profileData.name} onChange={handleChange} required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" name="phone" type="tel" value={profileData.phone} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <Button type="submit" className="bg-red-600 hover:bg-red-700" disabled={isLoading}>
                        {isLoading ? "Guardando..." : "Guardar Cambios"}
                      </Button>

                      <Button type="button" variant="outline" onClick={handleLogout}>
                        Cerrar Sesión
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Pedidos</CardTitle>
                  <CardDescription>Revisa tus pedidos anteriores y su estado</CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length > 0 ? (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row justify-between mb-4">
                            <div>
                              <h3 className="font-medium">Pedido #{order.id}</h3>
                              <p className="text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                {order.status}
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="font-medium">Total: ${order.total.toFixed(2)}</span>
                            <Button variant="outline" size="sm" onClick={() => router.push(`/seguimiento/${order.id}`)}>
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">Aún no has realizado ningún pedido.</p>
                      <Button asChild className="bg-red-600 hover:bg-red-700">
                        <a href="/productos">Explorar Productos</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>Mis Direcciones</CardTitle>
                  <CardDescription>Gestiona tus direcciones de envío</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" name="address" value={profileData.address} onChange={handleChange} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" name="city" value={profileData.city} onChange={handleChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">Estado/Provincia</Label>
                        <Input id="state" name="state" value={profileData.state} onChange={handleChange} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Código Postal</Label>
                        <Input id="zipCode" name="zipCode" value={profileData.zipCode} onChange={handleChange} />
                      </div>
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Guardar Dirección</Button>
                  </form>

                  <Separator className="my-8" />

                  <div className="text-center">
                    <p className="text-gray-500 mb-4">No tienes direcciones guardadas.</p>
                    <Button variant="outline">Añadir Nueva Dirección</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad</CardTitle>
                  <CardDescription>Gestiona tu contraseña y la seguridad de tu cuenta</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña Actual</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <Button className="bg-red-600 hover:bg-red-700">Cambiar Contraseña</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
