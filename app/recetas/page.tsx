import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, ChefHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recetas = [
  {
    id: 1,
    title: "Pasta con Salsa de Tomate Casera",
    description: "Una deliciosa pasta con salsa de tomate casera, perfecta para una cena rápida y sabrosa.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    time: 30,
    servings: 4,
    difficulty: "Fácil",
    category: "Plato Principal",
  },
  {
    id: 2,
    title: "Ensalada Mediterránea",
    description: "Ensalada fresca con ingredientes mediterráneos, ideal para los días calurosos de verano.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    time: 15,
    servings: 2,
    difficulty: "Fácil",
    category: "Ensalada",
  },
  {
    id: 3,
    title: "Pollo al Horno con Verduras",
    description: "Pollo jugoso al horno con verduras de temporada, una comida completa y nutritiva.",
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    time: 60,
    servings: 4,
    difficulty: "Media",
    category: "Plato Principal",
  },
  {
    id: 4,
    title: "Batido de Frutas Energético",
    description: "Batido lleno de frutas y nutrientes para empezar el día con energía.",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a90a0868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    time: 10,
    servings: 2,
    difficulty: "Fácil",
    category: "Bebida",
  },
  {
    id: 5,
    title: "Lasaña Vegetariana",
    description: "Lasaña vegetariana con capas de verduras, queso y salsa bechamel.",
    image:
      "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    time: 90,
    servings: 6,
    difficulty: "Media",
    category: "Plato Principal",
  },
  {
    id: 6,
    title: "Galletas de Avena y Chocolate",
    description: "Galletas caseras de avena con trozos de chocolate, perfectas para la merienda.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
    time: 45,
    servings: 24,
    difficulty: "Fácil",
    category: "Postre",
  },
]

export default function RecetasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=600&q=80"
            alt="Recetas Jumbo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Recetas Jumbo</h1>
            <p className="text-xl text-white/90 max-w-2xl px-4">
              Descubre deliciosas recetas para preparar con nuestros productos
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Nuestras Recetas</h2>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button variant="outline">Todas</Button>
              <Button variant="outline">Plato Principal</Button>
              <Button variant="outline">Ensaladas</Button>
              <Button variant="outline">Postres</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recetas.map((receta) => (
              <Card key={receta.id} className="overflow-hidden">
                <div className="relative h-[200px]">
                  <Image src={receta.image || "/placeholder.svg"} alt={receta.title} fill className="object-cover" />
                  <Badge className="absolute top-2 left-2 bg-red-600">{receta.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{receta.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{receta.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">{receta.time} min</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">{receta.servings} personas</span>
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-500">{receta.difficulty}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link href={`/recetas/${receta.id}`}>Ver receta completa</Link>
                  </Button>
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
