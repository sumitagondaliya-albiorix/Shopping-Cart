import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: Product[] = [];
  totalAmount: number = 0;
  cartItems: any;

  constructor(private cartService: CartService) {
    this.calculateTotalAmount();
    this.fetchCart();
  }
  calculateTotalAmount(): void {
    this.totalAmount = this.cartService.getTotalAmount();
  }
  removeItem(item: any) {
    item.quantity = 0;
    this.updateCartItems(item);
    this.calculateTotalAmount();
    this.fetchCart();
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.updateCartItems(item);
    this.calculateTotalAmount();
    this.fetchCart();
  }

  decrementQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
      this.updateCartItems(item);
      this.calculateTotalAmount();
    }
    this.fetchCart();
  }

  updateCartItems(item: any) {
    debugger;
    const index = this.cartItems.findIndex((i: any) => i.id === item.id);
    this.cartItems[index] = item;
    localStorage.setItem('products', JSON.stringify(this.cartItems));
  }

  fetchCart() {
    this.cartItems = JSON.parse(localStorage.getItem('products') || '[]');
  }
}
