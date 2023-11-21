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
    this.cartItems.splice(index, 1);
  }

  /**
   * Increments the quantity of a cart item at the specified index.
   *
   * @param {number} index - The index of the cart item to increment.
   * @return {void} This function does not return a value.
   */
  incrementQuantity(index: number): void {
    this.cartItems[index].quantity++;
    const storedUsers= JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('userProfile') || '{}');

    let newArray = storedUsers.map((user:any) =>{
      if(user.email === currentUser.email){
        return {
          ...user,
          cartItems:this.cartItems
        }
      }
      return user;
    })

    localStorage.setItem('users', JSON.stringify(newArray));
    localStorage.setItem('userProfile', JSON.stringify({...currentUser,cartItems:this.cartItems}));
  }

/**
 * Decrements the quantity of a cart item and updates the user's cart in local storage.
 *
 * @param {number} index - The index of the cart item to decrement the quantity of.
 * @return {void} This function does not return anything.
 */
  decrementQuantity(index: number) {
    this.cartItems[index].quantity--;
    if (this.cartItems[index].quantity === 0) {
      this.removeItem(index);
    }

    const storedUsers= JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('userProfile') || '{}');

    let newArray = storedUsers.map((user:any) =>{
      if(user.email === currentUser.email){
        return {
          ...user,
          cartItems:this.cartItems
        }
      }
      return user;
    })

    localStorage.setItem('users', JSON.stringify(newArray));
    localStorage.setItem('userProfile', JSON.stringify({...currentUser,cartItems:this.cartItems}));

  }
}
