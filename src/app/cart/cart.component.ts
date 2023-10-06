import { Component } from '@angular/core';
import { CartService, Product } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Product[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }
}


