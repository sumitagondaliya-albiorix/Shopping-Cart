
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  loadProducts(): void {
    this.http.get<Product[]>('assets/dummy-data.json').subscribe((data) => {
      this.products = data;
    });
  }

  getProducts(): Product[] {
    return this.products;
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  
}

