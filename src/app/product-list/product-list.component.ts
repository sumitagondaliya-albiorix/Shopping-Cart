import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { CartService } from '../Service/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.loadProducts().subscribe((response: any) => {
      this.products = response.products;
      this.products.map((product) => {
        product.quantity = 0;
        const matchIndex = this.cartService.cartItems.findIndex((cart) => {
          console.log('cart.id', cart.id);
          console.log('product.id', product.id);

          return product.id == cart.id;
        });
        if (matchIndex !== -1) {
          product.quantity = this.cartService.cartItems[matchIndex].quantity;
        }
      });
    });
  }

  addToCart(product: any) {
    const match = this.products.findIndex((item) => item.id === product.id);
    if (match !== -1) {
      product.quantity++;
      this.products[match] = product;
      this.cartService.addItem(product);
    }
  }

  IncDec(action: boolean, product: any) {
    const match = this.products.findIndex((item) => item.id === product.id);
    if (match !== -1) {
      action ? product.quantity++ : product.quantity--;
      this.products[match] = product;
    }
  }
}
