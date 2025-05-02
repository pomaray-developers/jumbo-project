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
    ingredients: [
      "500g de pasta (espaguetis o tallarines)",
      "6 tomates maduros",
      "2 dientes de ajo",
      "1 cebolla mediana",
      "2 cucharadas de aceite de oliva",
      "1 cucharadita de azúcar",
      "Sal y pimienta al gusto",
      "Albahaca fresca",
      "Queso parmesano rallado"
    ],
    steps: [
      "Poner una olla con agua a hervir. Añadir sal y cocinar la pasta según las instrucciones del paquete.",
      "Mientras tanto, pelar y picar finamente el ajo y la cebolla.",
      "Escaldar los tomates, pelarlos y cortarlos en cubos pequeños.",
      "En una sartén grande, calentar el aceite de oliva y sofreír el ajo y la cebolla hasta que estén transparentes.",
      "Añadir los tomates, el azúcar, sal y pimienta. Cocinar a fuego medio durante unos 15-20 minutos, removiendo ocasionalmente.",
      "Escurrir la pasta y mezclarla con la salsa de tomate.",
      "Servir con hojas de albahaca fresca y queso parmesano rallado por encima."
    ],
    relatedProducts: ["9", "10", "11"] // IDs de productos relacionados
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
    ingredients: [
      "200g de lechuga variada",
      "1 pepino",
      "2 tomates medianos",
      "1 pimiento rojo",
      "100g de queso feta",
      "50g de aceitunas negras",
      "1 cebolla roja pequeña",
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre balsámico",
      "Orégano, sal y pimienta al gusto"
    ],
    steps: [
      "Lavar y secar bien todas las verduras.",
      "Cortar la lechuga en trozos pequeños y colocarla como base en un bowl grande.",
      "Cortar el pepino, los tomates y el pimiento en cubos medianos.",
      "Cortar la cebolla roja en rodajas finas.",
      "Añadir todas las verduras cortadas sobre la lechuga.",
      "Desmigar el queso feta por encima y añadir las aceitunas negras.",
      "En un recipiente pequeño, mezclar el aceite de oliva, el vinagre balsámico, orégano, sal y pimienta.",
      "Aliñar la ensalada con la mezcla justo antes de servir."
    ],
    relatedProducts: ["5", "21", "30"]
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
    ingredients: [
      "4 muslos de pollo",
      "3 zanahorias",
      "2 patatas grandes",
      "1 pimiento verde",
      "1 pimiento rojo",
      "1 cebolla grande",
      "3 dientes de ajo",
      "2 cucharadas de aceite de oliva",
      "Sal, pimienta y romero al gusto"
    ],
    steps: [
      "Precalentar el horno a 200°C.",
      "Pelar y cortar las zanahorias y las patatas en trozos medianos.",
      "Cortar los pimientos y la cebolla en tiras.",
      "Pelar y picar los dientes de ajo.",
      "En una bandeja para horno, colocar las verduras y los muslos de pollo.",
      "Rociar con aceite de oliva, salpimentar y añadir romero al gusto.",
      "Hornear durante 45-60 minutos, hasta que el pollo esté dorado y las verduras tiernas."
    ],
    relatedProducts: ["12", "15", "18"]
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
    ingredients: [
      "1 plátano",
      "1 taza de fresas",
      "1 taza de arándanos",
      "1 taza de espinacas",
      "1 taza de leche de almendras",
      "1 cucharada de miel"
    ],
    steps: [
      "Lavar bien las frutas y las espinacas.",
      "Pelar el plátano y cortarlo en trozos.",
      "Colocar todas las frutas y las espinacas en una licuadora.",
      "Añadir la leche de almendras y la miel.",
      "Licuar hasta obtener una mezcla homogénea.",
      "Servir inmediatamente."
    ],
    relatedProducts: ["3", "7", "14"]
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
    ingredients: [
      "12 láminas de lasaña",
      "2 calabacines",
      "2 berenjenas",
      "1 pimiento rojo",
      "1 cebolla",
      "2 dientes de ajo",
      "400g de tomate triturado",
      "500ml de salsa bechamel",
      "200g de queso mozzarella rallado",
      "Aceite de oliva, sal y pimienta al gusto"
    ],
    steps: [
      "Precalentar el horno a 180°C.",
      "Lavar y cortar los calabacines, las berenjenas y el pimiento en rodajas finas.",
      "Pelar y picar la cebolla y los dientes de ajo.",
      "En una sartén grande, calentar un poco de aceite de oliva y sofreír la cebolla y el ajo hasta que estén transparentes.",
      "Añadir el tomate triturado, salpimentar y cocinar a fuego medio durante 10-15 minutos.",
      "En otra sartén, asar ligeramente las rodajas de calabacín, berenjena y pimiento.",
      "En una fuente para horno, colocar una capa de láminas de lasaña, una capa de verduras asadas, una capa de salsa de tomate y una capa de salsa bechamel.",
      "Repetir el proceso hasta terminar con una capa de salsa bechamel y espolvorear con queso mozzarella rallado.",
      "Hornear durante 30-40 minutos, hasta que la lasaña esté dorada y burbujeante."
    ],
    relatedProducts: ["8", "16", "22"]
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
    ingredients: [
      "200g de avena",
      "150g de harina",
      "100g de azúcar moreno",
      "100g de mantequilla",
      "1 huevo",
      "1 cucharadita de esencia de vainilla",
      "1 cucharadita de polvo de hornear",
      "100g de trozos de chocolate"
    ],
    steps: [
      "Precalentar el horno a 180°C.",
      "En un bowl grande, mezclar la mantequilla derretida con el azúcar moreno.",
      "Añadir el huevo y la esencia de vainilla, y mezclar bien.",
      "Incorporar la harina, la avena y el polvo de hornear, y mezclar hasta obtener una masa homogénea.",
      "Añadir los trozos de chocolate y mezclar nuevamente.",
      "Formar pequeñas bolitas con la masa y colocarlas en una bandeja para horno, aplastándolas ligeramente.",
      "Hornear durante 12-15 minutos, hasta que las galletas estén doradas.",
      "Dejar enfriar antes de servir."
    ],
    relatedProducts: ["4", "6", "13"]
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

export { recetas }
