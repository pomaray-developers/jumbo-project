"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => Promise<void>
  logout: () => Promise<void>
}

// Crear el contexto con un valor por defecto
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar si hay un usuario en sessionStorage
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (userData: User) => {
    // Guardar usuario en sessionStorage
    sessionStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = async () => {
    // Eliminar usuario de sessionStorage
    sessionStorage.removeItem("user")
    setUser(null)
    setIsAuthenticated(false)
  }

  // Crear el objeto de valor del contexto
  const contextValue = {
    user,
    isAuthenticated,
    login,
    logout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export { AuthContext }
