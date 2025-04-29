export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  discount: number
  stock: number
  rating?: number
  reviews?: number
}
