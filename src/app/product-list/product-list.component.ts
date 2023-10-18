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
    console.log(localStorage.getItem('products'));
    if (!localStorage.getItem('products')) {
      this.getProducts();
    } else {
      this.products = JSON.parse(localStorage.getItem('products') || '[]');
    }
  }

  getProducts() {
    this.productService.loadProducts().subscribe((response: any) => {
      this.products = response.products;
      console.log(this.products);
      this.products.forEach((item: any) => {
        item.quantity = 0;
      });
      localStorage.setItem('products', JSON.stringify(this.products));
    });
  }
  addToCart(product: any) {
    const match = this.products.findIndex((item) => item.id === product.id);
    if (match !== -1) {
      product.quantity++;
      this.products[match] = product;
      this.cartService.addItem(product);
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  IncDec(action: boolean, product: any) {
    const match = this.products.findIndex((item) => item.id === product.id);
    if (match !== -1) {
      action ? product.quantity++ : product.quantity--;
      this.products[match] = product;
      this.cartService.addItem(product);
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }
}
