"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import type { Product } from "@/types"

interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateItemQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

// Crear el contexto con un valor por defecto
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateItemQuantity: () => {},
  clearCart: () => {},
})

// Componente proveedor del contexto
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Cargar carrito desde sessionStorage
    const storedCart = sessionStorage.getItem("cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    // Guardar carrito en sessionStorage cuando cambie
    if (items.length > 0) {
      sessionStorage.setItem("cart", JSON.stringify(items))
    } else {
      sessionStorage.removeItem("cart")
    }
  }, [items])

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        // Si el producto no está en el carrito, añadirlo con cantidad 1
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const removeItem = (productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const updateItemQuantity = (productId: string, quantity: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    sessionStorage.removeItem("cart")
  }

  // Crear el objeto de valor del contexto
  const contextValue = {
    items,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
  }

  // Usar el proveedor del contexto con el valor
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

// Hook para usar el contexto
export function useCart() {
  const context = useContext(CartContext)
  return context
}
