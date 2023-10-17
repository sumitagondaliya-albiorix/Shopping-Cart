import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  addToCart: any;
  constructor() {}

  addItem(item: any) {
    this.cartItems.push(item);
  }
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartItemCount(): any {
    return this.cartItems.length;
  }

  getTotalAmount(): number {
    console.log('this.cartItems: ', this.cartItems);
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0);
  }
}
