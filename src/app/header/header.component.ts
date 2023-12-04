import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public cartService: CartService,
    private userService: UserService
  ) {}

  /**
   * Checks if the user is logged in based on localStorage.
   *
   * @return {boolean} - Returns true if user data exists, false otherwise.
   */
  isLoggedIn(): boolean {
    return !!this.userService.getUserProfile(); 
  }
}
