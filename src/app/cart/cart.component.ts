import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  totalAmount = 0;
  cartItems: Product[] = [];

  /**
   * Initializes a new instance of the class.
   *
   * @param {CartService} cartService - The cart service used by the constructor.
   */
  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
  }

  /**
   * Removes an item from the cart at the specified index.
   *
   * @param {number} index - The index of the item to remove.
   */
  removeItem(index: number) {
    this.cartService.removeCartItem(index);
  }

  /**
   * Increments the quantity of a cart item at the specified index.
   *
   * @param {number} index - The index of the cart item to increment.
   * @return {void} This function does not return a value.
   */
  incrementQuantity(index: number): void {
    this.cartService.incrementQuantity(index);
  }

  /**
   * Decrements the quantity of a cart item and updates the user's cart in local storage.
   *
   * @param {number} index - The index of the cart item to decrement the quantity of.
   * @return {void} This function does not return anything.
   */
  decrementQuantity(index: number) {
    this.cartService.decrementQuantity(index);
  }
}
