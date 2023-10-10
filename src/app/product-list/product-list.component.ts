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
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.loadProducts();
    this.productService.loadProducts().subscribe((response: Product[]) => {
      this.products = response;
      console.log('this.products: ', this.products);
    });
  }

  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
  

