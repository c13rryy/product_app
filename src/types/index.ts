export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface ProductForm {
  title: string
  description: string
  image: string
  publish: boolean
  price: string
}

export interface LocalProduct {
  id: number
  title: string
  description: string
  image: string
  publish: boolean
  price: number
}
