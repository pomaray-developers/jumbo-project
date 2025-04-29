"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de envío
    setTimeout(() => {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro boletín.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="py-12 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Suscríbete a nuestro boletín</h2>
          <p className="text-white/90 mb-6">
            Recibe nuestras ofertas exclusivas y novedades directamente en tu correo.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/90 border-0 focus-visible:ring-2 focus-visible:ring-white"
            />
            <Button type="submit" disabled={isLoading} className="bg-white text-red-600 hover:bg-white/90">
              {isLoading ? "Suscribiendo..." : "Suscribirse"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
