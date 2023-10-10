import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any[] = [];
  // cart: Product[];
  //  cart: Product[];

  constructor() { 
    
  }

  addItem(item: any) {
    this.cartItems.push(item);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // getCart(): Product[] {
  //   return this.cart;
  // }

  getCartItemCount(): number {
    return this.cartItems.length;
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
