"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { featuredProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Product } from "@/types"

export function FeaturedProducts() {
  const { addItem } = useCart()
  const [startIndex, setStartIndex] = useState(0)
  const productsToShow = 4
  const { toast } = useToast()

  const nextProducts = () => {
    setStartIndex((prev) => (prev + productsToShow >= featuredProducts.length ? 0 : prev + productsToShow))
  }

  const prevProducts = () => {
    setStartIndex((prev) =>
      prev - productsToShow < 0 ? Math.max(0, featuredProducts.length - productsToShow) : prev - productsToShow,
    )
  }

  const visibleProducts = featuredProducts.slice(startIndex, startIndex + productsToShow)

  const handleAddToCart = (product: Product) => {
    addItem(product)
    toast({
      title: "Producto añadido",
      description: (
        <div className="flex items-center space-x-2">
          <span>{product.name} ha sido añadido a tu carrito</span>
          <img src={product.image} alt={product.name} className="w-8 h-8 rounded-full" />
        </div>
      ),
      action: <ToastAction altText="Ver carrito">Ver carrito</ToastAction>,
    })
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Productos Destacados</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevProducts} disabled={startIndex === 0}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProducts}
              disabled={startIndex + productsToShow >= featuredProducts.length}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/productos">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
