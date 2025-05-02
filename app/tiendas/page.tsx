import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Clock, Search } from "lucide-react"
import Image from "next/image"

const stores = [
  {
    id: 1,
    name: "Jumbo Carretera Mella",
    address: "Carretera Mella casi esq. Charles de Gaulle, Santo Domingo Este, República Dominicana",
    phone: "(809) 695-2268",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 8:00 PM",
    image: "/Jumbo-Carretera-Mella.jpg"
  },
  {
    id: 2,
    name: "Jumbo Megacentro",
    address: "Av. San Vicente de Paúl #321, Centro Comercial Megacentro (1er y 2do nivel), Santo Domingo Este, República Dominicana",
    phone: "(809) 692-1000",
    hours: "Lunes a Sábado: 8:00 AM - 10:00 PM; Domingo: 9:00 AM - 8:00 PM",
    image: "/Jumbo-Megacentro.jpg"
  },
  {
    id: 3,
    name: "Jumbo San Isidro",
    address: "Av. Rafael Tomás Fernández Domínguez esq. Juan Pablo Duarte, Urb. Los Ángeles, Santo Domingo Este, República Dominicana",
    phone: "(809) 748-3012",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 8:00 PM",
    image: "/Jumbo-San-Isidro.jpg"
  },
  {
    id: 4,
    name: "Jumbo Ágora Mall",
    address: "Av. John F. Kennedy esq. Abraham Lincoln, Centro Comercial Ágora Mall, Santo Domingo, República Dominicana",
    phone: "(809) 683-1008",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 9:00 PM",
    image: "/Jumbo-Agora-Mall.jpg"
  },
  {
    id: 5,
    name: "Jumbo Luperón",
    address: "Av. Gregorio Luperón esq. Gustavo Mejía Ricart, Santo Domingo, República Dominicana",
    phone: "(809) 562-6911",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 8:00 PM",
    image: "/Jumbo-Luperon.jpg"
  },
  {
    id: 6,
    name: "Jumbo La Vega",
    address: "Av. Pedro A. Rivera esq. Mangio Bobadilla, La Vega, República Dominicana",
    phone: "(809) 691-9141",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 8:00 PM",
    image: "/Jumbo-La-Vega.jpg"
  },
  {
    id: 7,
    name: "Jumbo San Pedro",
    address: "Av. Luis Amiama Tío esq. Calle José Hazim Azar #104, San Pedro de Macorís, República Dominicana",
    phone: "(809) 529-5851",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 8:00 PM",
    image: "/Jumbo San Pedro.webp"
  },
  {
    id: 8,
    name: "Jumbo La Romana",
    address: "Av. Libertad esq. Dr. Gonzalvo, La Romana, República Dominicana",
    phone: "(809) 813-5032",
    hours: "Lunes a Sábado: 7:00 AM - 10:00 PM; Domingo: 8:00 AM - 9:00 PM",
    image: "/Jumbo-La-Romana.jpg"
  }
];


export default function TiendasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="/Banner-Tiendas.jpg"
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
            {stores.map((store) => (
              <Card key={store.id} className="overflow-hidden">
                <div className="relative h-[200px]">
                  <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{store.name}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>{store.address}</span>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>{store.phone}</span>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                      <span>{store.hours}</span>
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
