"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Package, Truck, Home, ShoppingBag, MapPin } from "lucide-react"
import { formatCurrency } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"

interface OrderStatus {
  id: string
  status: "processing" | "shipped" | "out-for-delivery" | "delivered"
  date: string
  items: any[]
  total: number
  estimatedDelivery: string
  address: string
  trackingNumber: string
}

export default function TrackingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [order, setOrder] = useState<OrderStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentLocation, setCurrentLocation] = useState("")
  const [lastUpdate, setLastUpdate] = useState("")

  useEffect(() => {
    // Recuperar datos del pedido desde sessionStorage
    const storedOrder = sessionStorage.getItem("lastOrder")

    if (storedOrder) {
      const parsedOrder = JSON.parse(storedOrder)

      // Verificar si el ID coincide
      if (parsedOrder.id.toString() === params.id) {
        // Simular cambio de estado después de un tiempo
        const currentTime = new Date().getTime()
        const orderTime = new Date(parsedOrder.date).getTime()
        const timeDiff = currentTime - orderTime

        let status = "processing"
        let progressValue = 25
        let location = "Centro de distribución Jumbo"
        let updateTime = new Date(orderTime + 1000 * 60 * 5).toLocaleString() // 5 minutos después del pedido

        if (timeDiff > 60000) {
          // Más de 1 minuto
          status = "shipped"
          progressValue = 50
          location = "En tránsito - Saliendo del centro de distribución"
          updateTime = new Date(orderTime + 1000 * 60 * 60).toLocaleString() // 1 hora después del pedido
        }
        if (timeDiff > 120000) {
          // Más de 2 minutos
          status = "out-for-delivery"
          progressValue = 75
          location = "En camino a tu dirección - A 3.2 km de distancia"
          updateTime = new Date(orderTime + 1000 * 60 * 120).toLocaleString() // 2 horas después del pedido
        }
        if (timeDiff > 180000) {
          // Más de 3 minutos
          status = "delivered"
          progressValue = 100
          location = "Entregado en tu dirección"
          updateTime = new Date(orderTime + 1000 * 60 * 180).toLocaleString() // 3 horas después del pedido
        }

        setOrder({
          ...parsedOrder,
          status: status as any,
          estimatedDelivery: new Date(orderTime + 1000 * 60 * 180).toLocaleString(), // 3 horas después del pedido
          address: "Av. Principal 123, Ciudad",
          trackingNumber: `JMB-${Math.floor(100000 + Math.random() * 900000)}`,
        })
        setProgress(progressValue)
        setCurrentLocation(location)
        setLastUpdate(updateTime)
      }
    }

    setLoading(false)

    // Simular actualizaciones en tiempo real
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 1, 100)

          // Actualizar ubicación basada en el progreso
          if (
            newProgress > 25 &&
            newProgress <= 50 &&
            currentLocation !== "En tránsito - Saliendo del centro de distribución"
          ) {
            setCurrentLocation("En tránsito - Saliendo del centro de distribución")
            setLastUpdate(new Date().toLocaleString())
          } else if (
            newProgress > 50 &&
            newProgress <= 75 &&
            currentLocation !== "En camino a tu dirección - A 3.2 km de distancia"
          ) {
            setCurrentLocation("En camino a tu dirección - A 3.2 km de distancia")
            setLastUpdate(new Date().toLocaleString())
          } else if (
            newProgress > 75 &&
            newProgress <= 90 &&
            currentLocation !== "En camino a tu dirección - A 0.8 km de distancia"
          ) {
            setCurrentLocation("En camino a tu dirección - A 0.8 km de distancia")
            setLastUpdate(new Date().toLocaleString())
          } else if (newProgress > 90 && currentLocation !== "Entregado en tu dirección") {
            setCurrentLocation("Entregado en tu dirección")
            setLastUpdate(new Date().toLocaleString())

            // Actualizar el estado del pedido a entregado
            setOrder((prev) => (prev ? { ...prev, status: "delivered" } : null))
          }

          return newProgress
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [params.id, progress, currentLocation])

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400 animate-pulse" />
              <h2 className="text-2xl font-bold mb-2">Cargando información del pedido...</h2>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!order) {
    return (
      <>
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold mb-2">Pedido no encontrado</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                No pudimos encontrar información sobre este pedido.
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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Seguimiento de Pedido</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Pedido #{params.id} • {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" onClick={() => router.push("/productos")}>
              Continuar comprando
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Estado del Envío</CardTitle>
                  <CardDescription>Número de seguimiento: {order.trackingNumber}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Progreso del envío</span>
                      <span className="text-sm font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Ubicación actual</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{currentLocation}</p>
                        <p className="text-xs text-gray-500 mt-1">Última actualización: {lastUpdate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status !== "processing" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}
                        >
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">Pedido confirmado</h3>
                        <p className="text-sm text-gray-500">{new Date(order.date).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status !== "processing" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}
                        >
                          <Package className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">Pedido preparado</h3>
                        <p className="text-sm text-gray-500">
                          {order.status !== "processing"
                            ? new Date(new Date(order.date).getTime() + 60000).toLocaleString()
                            : "Pendiente"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status === "out-for-delivery" || order.status === "delivered" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}
                        >
                          <Truck className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">En camino</h3>
                        <p className="text-sm text-gray-500">
                          {order.status === "out-for-delivery" || order.status === "delivered"
                            ? new Date(new Date(order.date).getTime() + 120000).toLocaleString()
                            : "Pendiente"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${order.status === "delivered" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500"}`}
                        >
                          <Home className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-medium">Entregado</h3>
                        <p className="text-sm text-gray-500">
                          {order.status === "delivered"
                            ? new Date(new Date(order.date).getTime() + 180000).toLocaleString()
                            : "Pendiente"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detalles de la entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-1">Dirección de entrega</h3>
                      <p className="text-gray-600 dark:text-gray-400">{order.address}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Fecha estimada de entrega</h3>
                      <p className="text-gray-600 dark:text-gray-400">{order.estimatedDelivery}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Método de entrega</h3>
                      <p className="text-gray-600 dark:text-gray-400">Entrega estándar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Resumen del Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="max-h-[300px] overflow-y-auto space-y-3">
                      {order.items.map((item: any) => {
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

                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{formatCurrency(order.total)}</span>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full" variant="outline" onClick={() => window.print()}>
                        Imprimir detalles
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>¿Necesitas ayuda?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Si tienes alguna pregunta o problema con tu pedido, no dudes en contactarnos.
                  </p>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link href="/contacto">Contactar Soporte</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
