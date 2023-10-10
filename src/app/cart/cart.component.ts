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
  cartItems:any;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
    this.calculateTotalAmount();
  }
  calculateTotalAmount() {
    this.totalAmount = this.cartService.getTotalAmount();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.calculateTotalAmount();
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.calculateTotalAmount();
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalAmount();
    }
  }
}
