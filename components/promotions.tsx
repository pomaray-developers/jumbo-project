import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Promotions() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80"
              alt="Promoción 1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-white mb-2">2x1 en Productos Seleccionados</h3>
              <p className="text-white mb-4">Aprovecha nuestras ofertas especiales</p>
              <Button asChild className="w-fit bg-red-600 hover:bg-red-700">
                <Link href="/ofertas">Ver ofertas</Link>
              </Button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80"
              alt="Promoción 2"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Descuentos en Electrodomésticos</h3>
              <p className="text-white mb-4">Hasta 30% de descuento</p>
              <Button asChild className="w-fit bg-red-600 hover:bg-red-700">
                <Link href="/electrodomesticos">Comprar ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
