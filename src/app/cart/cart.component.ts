import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  totalAmount = 0;

  cartItems: Product[]= [];

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  incrementQuantity(index: number) {
    this.cartItems[index].quantity++;
  }

  decrementQuantity(index: number) {
    this.cartItems[index].quantity--;
    if (this.cartItems[index].quantity === 0) {
      this.removeItem(index);
    }
  }
}
