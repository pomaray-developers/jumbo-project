"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { JumboLogo } from "@/components/jumbo-logo"

export function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated } = useAuth()
  const { items } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white shadow-md dark:bg-gray-950" : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/productos"
                    className="text-lg font-medium hover:text-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Productos
                  </Link>
                  <Link
                    href="/ofertas"
                    className="text-lg font-medium hover:text-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ofertas
                  </Link>
                  <Link
                    href="/recetas"
                    className="text-lg font-medium hover:text-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Recetas
                  </Link>
                  <Link
                    href="/tiendas"
                    className="text-lg font-medium hover:text-red-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tiendas
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center ml-2 md:ml-0">
              <JumboLogo className="h-8 w-auto" />
            </Link>

            <nav className="hidden md:flex ml-8 space-x-6">
              <Link
                href="/"
                className={`font-medium transition-colors ${pathname === "/" ? "text-red-600" : "hover:text-red-600"}`}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className={`font-medium transition-colors ${pathname === "/productos" ? "text-red-600" : "hover:text-red-600"}`}
              >
                Productos
              </Link>
              <Link
                href="/ofertas"
                className={`font-medium transition-colors ${pathname === "/ofertas" ? "text-red-600" : "hover:text-red-600"}`}
              >
                Ofertas
              </Link>
              <Link
                href="/recetas"
                className={`font-medium transition-colors ${pathname === "/recetas" ? "text-red-600" : "hover:text-red-600"}`}
              >
                Recetas
              </Link>
              <Link
                href="/tiendas"
                className={`font-medium transition-colors ${pathname === "/tiendas" ? "text-red-600" : "hover:text-red-600"}`}
              >
                Tiendas
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center relative w-1/3 max-w-md">
            <Input type="search" placeholder="Buscar productos..." className="pr-10" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/buscar" className="md:hidden">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
              </Button>
            </Link>

            <Link href={isAuthenticated ? "/perfil" : "/login"}>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </Link>

            <Link href="/carrito" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Carrito</span>
              </Button>
              {items.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700">{items.length}</Badge>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
