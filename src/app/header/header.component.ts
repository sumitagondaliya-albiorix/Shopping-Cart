import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartItemCount: number = 0;
  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }
}

