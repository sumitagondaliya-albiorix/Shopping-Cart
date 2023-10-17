import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartItemCount: any = 1;
  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  ngOnInit(): any {
    this.cartService.getCartItemCount().subscribe((response: any) => {
      this.cartItemCount = response;
    });
  }
}
