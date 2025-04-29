"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types"
import { allProducts } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  const { addItem } = useCart()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")

  // Obtener categorías únicas
  const categories = [...new Set(allProducts.map((product) => product.category))]

  useEffect(() => {
    // Simular carga de productos
    setProducts(allProducts)
    setFilteredProducts(allProducts)
  }, [])

  useEffect(() => {
    let result = [...products]

    // Filtrar por búsqueda
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filtrar por categorías
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }

    // Filtrar por rango de precio
    const minPrice = priceRange[0]
    const maxPrice = priceRange[1]
    result = result.filter((product) => {
      const finalPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price
      return finalPrice >= minPrice && finalPrice <= maxPrice
    })

    // Ordenar productos
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
          return priceA - priceB
        })
        break
      case "price-desc":
        result.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price
          return priceB - priceA
        })
        break
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "discount":
        result.sort((a, b) => b.discount - a.discount)
        break
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        // Por defecto, ordenar por destacados (no hacer nada)
        break
    }

    setFilteredProducts(result)
  }, [products, searchQuery, selectedCategories, priceRange, sortBy])

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setPriceRange([0, 100])
    setSelectedCategories([])
    setSortBy("featured")
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
        <div className="bg-white dark:bg-gray-800 py-8 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Productos</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Explora nuestra amplia selección de productos de alta calidad
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filtros para escritorio */}
            <div className="hidden md:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Categorías</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Precio</h3>
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  value={priceRange}
                  onValueChange={handlePriceChange}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <Separator />

              <Button variant="outline" className="w-full" onClick={clearFilters}>
                Limpiar filtros
              </Button>
            </div>

            {/* Contenido principal */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="relative w-full sm:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full sm:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <SlidersHorizontal className="h-4 w-4" />
                        <span className="sr-only">Filtros</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <div className="space-y-6 mt-6">
                        <div>
                          <h3 className="font-medium mb-3">Categorías</h3>
                          <div className="space-y-2">
                            {categories.map((category) => (
                              <div key={category} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`mobile-category-${category}`}
                                  checked={selectedCategories.includes(category)}
                                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                                />
                                <Label
                                  htmlFor={`mobile-category-${category}`}
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {category}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-3">Precio</h3>
                          <Slider
                            defaultValue={[0, 100]}
                            max={100}
                            step={1}
                            value={priceRange}
                            onValueChange={handlePriceChange}
                            className="mb-6"
                          />
                          <div className="flex items-center justify-between">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                          </div>
                        </div>

                        <Separator />

                        <Button variant="outline" className="w-full" onClick={clearFilters}>
                          Limpiar filtros
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Destacados</SelectItem>
                      <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
                      <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
                      <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
                      <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
                      <SelectItem value="discount">Mayor Descuento</SelectItem>
                      <SelectItem value="rating">Mejor Valorados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Resultados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No se encontraron productos</h3>
                  <p className="text-gray-500 mb-4">Intenta con otros filtros o términos de búsqueda</p>
                  <Button onClick={clearFilters}>Limpiar filtros</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
