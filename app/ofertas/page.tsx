import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import { allProducts } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

export default function OfertasPage() {
  // Filtrar productos con descuento
  const productosConDescuento = allProducts.filter((product) => product.discount > 0)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&h=600&q=80"
            alt="Ofertas especiales"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ofertas Especiales</h1>
            <p className="text-xl text-white/90 max-w-2xl px-4">
              Descubre nuestras mejores ofertas y promociones de la semana
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-[200px]">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="2x1 en productos seleccionados"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
                  <Badge className="w-fit mb-2 bg-red-600">Oferta Especial</Badge>
                  <h2 className="text-2xl font-bold text-white mb-2">2x1 en Productos Seleccionados</h2>
                  <p className="text-white/90 mb-4 max-w-md">
                    Lleva 2 y paga 1 en productos seleccionados de nuestra tienda
                  </p>
                  <Button className="w-fit bg-red-600 hover:bg-red-700 pointer-events-none">Próximamente</Button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80"
                  alt="Descuentos en frutas y verduras"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
                  <Badge className="w-fit mb-2 bg-red-600">Oferta Especial</Badge>
                  <h2 className="text-2xl font-bold text-white mb-2">30% en Frutas y Verduras</h2>
                  <p className="text-white/90 mb-4 max-w-md">Aprovecha nuestros descuentos en productos frescos</p>
                  <Button className="w-fit bg-red-600 hover:bg-red-700 pointer-events-none">Próximamente</Button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8">Productos con Descuento</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productosConDescuento.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="relative pt-[100%]">
                  <Link href={`/productos/${product.id}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <Badge className="absolute top-2 left-2 bg-red-600">-{product.discount}%</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{product.category}</span>
                  </div>
                  <Link href={`/productos/${product.id}`} className="block mb-2">
                    <h3 className="font-medium line-clamp-2 hover:text-red-600 transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-red-600">
                      {formatCurrency(product.price * (1 - product.discount / 100))}
                    </span>
                    <span className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</span>
                  </div>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700" asChild>
                    <Link href={`/productos/${product.id}`}>Próximamente</Link>
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
