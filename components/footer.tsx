import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { JumboLogo } from "@/components/jumbo-logo"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <JumboLogo className="h-8 w-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Jumbo Supermercado, tu destino para productos de calidad a precios competitivos.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/recetas" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                  Recetas
                </Link>
              </li>
              <li>
                <Link href="/tiendas" className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                  Tiendas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  Política de Devoluciones
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">info@jumbo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Jumbo Supermercado. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
