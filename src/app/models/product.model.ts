export interface Product {
  id: number;
  category: string;
  description: string;
  images: string[];
  price: number;
  title: string;
  quantity: number;
  thumbnail: string;
  brand:string;
  rating: number;
}


export interface ProductResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

