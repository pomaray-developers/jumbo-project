import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, CheckCircle, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const deliveryOptions = [
  {
    id: 1,
    title: "Entrega Estándar",
    description: "Recibe tu pedido en 24-48 horas",
    price: "Gratis en compras superiores a $50",
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Entrega Express",
    description: "Recibe tu pedido en menos de 3 horas",
    price: "$5.99",
    icon: Clock,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Recogida en Tienda",
    description: "Recoge tu pedido en la tienda que prefieras",
    price: "Gratis",
    icon: MapPin,
    color: "bg-purple-100 text-purple-600",
  },
]

const steps = [
  {
    id: 1,
    title: "Selecciona tus productos",
    description: "Navega por nuestra tienda y añade productos a tu carrito",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Elige tu método de entrega",
    description: "Selecciona entre entrega a domicilio o recogida en tienda",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "Realiza el pago",
    description: "Paga de forma segura con tu método de pago preferido",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    title: "Recibe tu pedido",
    description: "Nosotros nos encargamos del resto",
    icon: "/placeholder.svg?height=80&width=80",
  },
]

export default function DeliveryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=800&q=80"
            alt="Entrega a Domicilio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Entrega a Domicilio</h1>
            <p className="text-xl text-white/90 max-w-2xl px-4 mb-6">Recibe tus compras en la comodidad de tu hogar</p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="/productos">Comprar ahora</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Opciones de Entrega</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {deliveryOptions.map((option) => (
              <Card key={option.id} className="border-2 hover:border-red-600 transition-colors">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center mb-4`}>
                    <option.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>

                  <Badge variant="outline" className="mb-6">
                    {option.price}
                  </Badge>

                  <Button className="w-full bg-red-600 hover:bg-red-700">Seleccionar</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">¿Cómo funciona?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">{step.id}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Zonas de Cobertura</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Actualmente ofrecemos servicio de entrega a domicilio en las siguientes zonas:
                </p>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Centro de la ciudad</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Zona Norte</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Zona Sur</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Zona Este</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span>Zona Oeste</span>
                  </li>
                </ul>

                <Button className="bg-red-600 hover:bg-red-700">Verificar disponibilidad</Button>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553194587-b010d08c6c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Mapa de cobertura"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
