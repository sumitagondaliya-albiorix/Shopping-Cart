
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }
}
