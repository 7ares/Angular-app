export class productDetail {

  
  id: number
  title: String
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: any
  amount:number
  
  constructor() {
    this.amount=0,
    (this.id = 1),
      (this.title = 'iPhone 9'),
      (this.description = 'An apple mobile which is nothing like apple'),
      (this.price = 549),
      (this.discountPercentage = 12.96),
      (this.rating = 4.69),
      (this.stock = 94),
      (this.brand = 'Apple'),
      (this.category = 'smartphones'),
      (this.thumbnail =
        'https://dummyjson.com/image/i/products/1/thumbnail.jpg'),
      (this.images = [
        'https://dummyjson.com/image/i/products/1/1.jpg',
        'https://dummyjson.com/image/i/products/1/2.jpg',
        'https://dummyjson.com/image/i/products/1/3.jpg',
        'https://dummyjson.com/image/i/products/1/4.jpg',
        'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
      ])
  }

  
}
