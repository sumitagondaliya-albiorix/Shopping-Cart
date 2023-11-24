import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('userProfile') || '{}');
    this.cartItems = currentUser.cartItems || [];
  }

  /**
   * Updates a cart item in the cartItems array.
   *
   * @param {Product} updatedItem - The updated cart item to be added to the cartItems array.
   * @return {void} This function does not return anything.
   */
  updateCartItem(updatedItem: Product): void {
    const index = this.cartItems.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.cartItems[index] = updatedItem;
      this.updateUserCartItems();
    }
  }

  /**
   * Adds an item to the cart.
   *
   * @param {Product} item - The item to be added to the cart.
   * @return {void} - This function doesn't return anything.
   */
  addCartItem(item: Product): void {
    this.cartItems.push(item);
    this.updateUserCartItems();
  }

  /**
   * Removes an item from the cart at the specified index.
   *
   * @param {number} index - The index of the item to remove.
   * @return {void} This function does not return anything.
   */
  removeCartItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateUserCartItems();
  }

  /**
   * Retrieves a cart item by its product ID.
   *
   * @param {number} productId - The ID of the product.
   * @return {Product | undefined} The cart item with the specified product ID, or undefined if not found.
   */
  getCartItem(productId: number): Product | undefined {
    return this.cartItems.find((item) => item.id === productId);
  }

  /**
   * Returns the number of items in the cart.
   *
   * @return {number} The number of items in the cart.
   */
  get getCartItemCount(): number {
    return this.cartItems.length;
  }

  /**
   * Calculates the total amount of the cart items.
   *
   * @return {number} The total amount of the cart items.
   */
  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  /**
   * Updates the user's cart items in the local storage.
   * @return {void} This function does not return anything.
   */
  private updateUserCartItems(): void {
    const currentUser = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const updatedUser = { ...currentUser, cartItems: this.cartItems };
    localStorage.setItem('userProfile', JSON.stringify(updatedUser));
  }
}

