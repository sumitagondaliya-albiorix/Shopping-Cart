export interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}


