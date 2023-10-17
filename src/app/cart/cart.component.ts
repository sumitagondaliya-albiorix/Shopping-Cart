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
    this.cartItems = this.cartService.cartItems;
    this.calculateTotalAmount();
  }
  calculateTotalAmount():void {
    this.totalAmount = this.cartService.getTotalAmount();
    // return "sumita";// apply a return type for security purpose
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  

  removeItem(index: number) {
    this.cartService.removeItem(index);
    this.calculateTotalAmount();
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.updateCartItems(item);
    this.calculateTotalAmount();
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCartItems(item);
      this.calculateTotalAmount();
    }
  }

  updateCartItems(item: any) {
    const index = this.cartItems.findIndex((i: any) => i === item);
    this.cartItems[index] = item;
  }
}
