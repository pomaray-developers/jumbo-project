import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Clock, Search } from "lucide-react"
import Image from "next/image"

const tiendas = [
  {
    id: 1,
    name: "Jumbo Centro Comercial",
    address: "Av. Principal 123, Centro Comercial Plaza, Ciudad",
    phone: "+1 234 567 890",
    hours: "Lun-Sáb: 8:00 - 22:00, Dom: 9:00 - 21:00",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80",
  },
  {
    id: 2,
    name: "Jumbo Norte",
    address: "Calle Norte 456, Zona Residencial, Ciudad",
    phone: "+1 234 567 891",
    hours: "Lun-Sáb: 8:00 - 22:00, Dom: 9:00 - 21:00",
    image:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80",
  },
  {
    id: 3,
    name: "Jumbo Sur",
    address: "Av. Sur 789, Zona Comercial, Ciudad",
    phone: "+1 234 567 892",
    hours: "Lun-Sáb: 8:00 - 22:00, Dom: 9:00 - 21:00",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80",
  },
  {
    id: 4,
    name: "Jumbo Express",
    address: "Calle Central 321, Zona Financiera, Ciudad",
    phone: "+1 234 567 893",
    hours: "Lun-Dom: 7:00 - 23:00",
    image:
      "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80",
  },
]

export default function TiendasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1601599963565-b7f49beb6b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=600&q=80"
            alt="Nuestras Tiendas"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestras Tiendas</h1>
            <p className="text-xl text-white/90 max-w-2xl px-4 mb-6">Encuentra la tienda Jumbo más cercana a ti</p>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por ciudad o código postal"
                className="pl-10 bg-white/90 border-0 h-12"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700">
                Buscar
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Tiendas Jumbo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiendas.map((tienda) => (
              <Card key={tienda.id} className="overflow-hidden">
                <div className="relative h-[200px]">
                  <Image src={tienda.image || "/placeholder.svg"} alt={tienda.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{tienda.name}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>{tienda.address}</span>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>{tienda.phone}</span>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>{tienda.hours}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700">Ver en mapa</Button>
                    <Button variant="outline" className="flex-1">
                      Cómo llegar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
