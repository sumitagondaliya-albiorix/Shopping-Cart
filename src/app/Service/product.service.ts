import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})

/**
 * Retrieves the products.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
export class ProductService {
  getProducts() {
      throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  /**
   * Load products from the API.
   * @returns {Observable<any>} Observable that emits the products data.
   */
  loadProducts(): Observable<ProductResponse> {
    // Make an HTTP GET request to the API endpoint.
    return this.http.get<ProductResponse>('https://dummyjson.com/products');
  }
}
