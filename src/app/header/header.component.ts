import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public cartService: CartService) {}

  /**
   * Checks if the user is logged in based on localStorage.
   *
   * @return {boolean} - Returns true if user data exists, false otherwise.
   */
  isLoggedIn(): boolean {
    // Check if the user is logged in based on localStorage
    const userData = localStorage.getItem('userProfile');
    return !!userData; // Return true if user data exists, false otherwise
  }
}
