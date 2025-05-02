"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative pt-[100%]">
        <Link href={`/productos/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {product.discount > 0 && <Badge className="absolute top-2 left-2 bg-red-600">-{product.discount}%</Badge>}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">{product.category}</span>
        </div>
        <Link href={`/productos/${product.id}`} className="block mb-2">
          <h3 className="font-medium line-clamp-2 hover:text-red-600 transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center mb-2">
          {product.rating && (
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating ?? 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {product.discount > 0 ? (
              <>
                <span className="font-bold text-red-600">
                  {formatCurrency(product.price * (1 - product.discount / 100))}
                </span>
                <span className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</span>
              </>
            ) : (
              <span className="font-bold">{formatCurrency(product.price)}</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
            onClick={onAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Añadir al carrito</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
