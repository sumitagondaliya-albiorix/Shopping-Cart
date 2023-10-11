export interface Product {
  id: number;
  category: string;
  description: string;
  images: [string];
  price: number;
  title: string;
  quantity: number;
  rating: {
    count: number;
    rate: number;
  };
}
