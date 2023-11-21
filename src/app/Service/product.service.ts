import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
/**
 * Load products from the API.
 * @returns {Observable<any>} Observable that emits the products data.
 */
loadProducts(): Observable<Product> {
  // Make an HTTP GET request to the API endpoint.
  return this.http.get<Product>('https://dummyjson.com/products');
}
}
