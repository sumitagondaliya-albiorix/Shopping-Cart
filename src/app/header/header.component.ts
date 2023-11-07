import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartItemCount: any = 1;
  constructor(public cartService: CartService) {}

  ngOnInit(): any {
    this.cartService.getCartItemCount().subscribe((response: any) => {
      this.cartItemCount = response;
      // console.log('response: ', response);
    });
  }
}
