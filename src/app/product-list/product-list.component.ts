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
      console.log(this.products);
      this.products.forEach((item: any) => {
        item.quantity = 0;
      });
      
      
    });
  }
  addToCart(product: any) {
    this.cartService.addItem(product);
  }
}
