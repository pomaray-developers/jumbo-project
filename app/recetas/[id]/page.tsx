import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, ChefHat, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { recetas } from "../page"
import { allProducts } from "@/data/products"

export async function generateStaticParams() {
    return recetas.map((receta) => ({
        id: receta.id.toString(),
    }))
}

export default function RecetaDetallePage({ params }: { params: { id: string } }) {
    const receta = recetas.find((r) => r.id === parseInt(params.id))

    if (!receta) {
        notFound()
    }

    // Find related products if they exist
    const relatedProducts = receta.relatedProducts
        ? allProducts.filter(product => receta.relatedProducts.includes(product.id))
        : []

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
                <div className="relative h-[400px] overflow-hidden">
                    <Image
                        src={receta.image || "/placeholder.svg"}
                        alt={receta.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                        <Badge className="mb-4 text-lg px-4 py-1 bg-red-600">{receta.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{receta.title}</h1>
                        <p className="text-xl text-white/90 max-w-2xl px-4">
                            {receta.description}
                        </p>
                    </div>
                </div>

                <div className="container max-w-5xl mx-auto px-4 py-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8 border-b pb-8">
                            <div className="flex flex-col items-center">
                                <Clock className="h-8 w-8 text-red-600 mb-2" />
                                <span className="text-lg font-medium">Tiempo</span>
                                <span className="text-gray-600 dark:text-gray-400">{receta.time} minutos</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Users className="h-8 w-8 text-red-600 mb-2" />
                                <span className="text-lg font-medium">Porciones</span>
                                <span className="text-gray-600 dark:text-gray-400">{receta.servings} personas</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <ChefHat className="h-8 w-8 text-red-600 mb-2" />
                                <span className="text-lg font-medium">Dificultad</span>
                                <span className="text-gray-600 dark:text-gray-400">{receta.difficulty}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-12">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
                                <ul className="space-y-2">
                                    {receta.ingredients.map((ingredient, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block h-6 w-6 rounded-full bg-red-600 text-white text-center mr-3 flex-shrink-0">•</span>
                                            <span>{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4">Preparación</h2>
                                <ol className="space-y-6">
                                    {receta.steps.map((step, index) => (
                                        <li key={index} className="flex">
                                            <span className="inline-block h-6 w-6 rounded-full bg-red-600 text-white text-center mr-3 flex-shrink-0">
                                                {index + 1}
                                            </span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>

                    {relatedProducts.length > 0 && (
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Productos recomendados para esta receta</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedProducts.map((product) => (
                                    <Card key={product.id} className="overflow-hidden">
                                        <div className="relative h-[200px]">
                                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                                            {product.discount > 0 && (
                                                <Badge className="absolute top-2 right-2 bg-red-600">-{product.discount}%</Badge>
                                            )}
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    {product.discount > 0 ? (
                                                        <>
                                                            <span className="text-lg font-bold text-red-600">
                                                                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                                                            </span>
                                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                                ${product.price.toFixed(2)}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                                                    )}
                                                </div>
                                                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                                    Añadir
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <Button asChild variant="outline" className="mr-4">
                            <Link href="/recetas">Volver a recetas</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
