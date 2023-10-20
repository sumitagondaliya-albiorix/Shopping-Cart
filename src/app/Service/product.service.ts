import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  loadProducts(): any {
    return this.http.get('https://dummyjson.com/products');
  }
}
