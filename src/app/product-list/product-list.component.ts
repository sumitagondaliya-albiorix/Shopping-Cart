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

  /**
   * Constructor for the class.
   *
   * @param {ProductService} productService - The product service.
   * @param {CartService} cartService - The cart service.
   */
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  /**
   * Initializes the component and calls the getProducts method.
   *
   * @returns {void} - This function does not return anything.
   */
  ngOnInit() {
    this.getProducts();
  }

  /**
   * Retrieves the products by calling the loadProducts method of the productService.
   * For each product, it retrieves the corresponding cartItem from the cartService and sets the quantity property of the product based on the cartItem's quantity.
   */
  getProducts() {
    this.productService.loadProducts().subscribe((response: any) => {
      this.products = response.products;
      this.products.forEach((product) => {
        const cartItem = this.cartService.getCartItem(product.id);
        product.quantity = cartItem ? cartItem.quantity : 0;
      });
    });
  }

  /**
   * Adds a product to the cart. If the product is already in the cart,
   * the quantity is incremented. If the product is not in the cart,
   * a new cart item is created with a quantity of 1.
   *
   * @param {Product} product - The product to be added to the cart.
   */
  addToCart(product: Product) {
    const cartItem = this.cartService.getCartItem(product.id);
    if (cartItem) {
      cartItem.quantity++;
      this.cartService.updateCartItem(cartItem);
    } else {
      this.cartService.addCartItem({ ...product, quantity: 1 });
    }
    product.quantity++;
  }

  /**
   * Updates the quantity of a product in the shopping cart based on the provided action.
   *
   * @param {boolean} action - A boolean indicating whether to increment or decrement the quantity.
   * @param {Product} product - The product to update the quantity for.
   */
  IncDec(action: boolean, product: Product) {
    const cartItem = this.cartService.getCartItem(product.id);
    if (cartItem) {
      action ? cartItem.quantity++ : cartItem.quantity--;

      if (cartItem.quantity === 0) {
        const index = this.cartService.cartItems.findIndex(
          (item) => item.id === cartItem.id
        );

        this.cartService.removeCartItem(index);
      } else {
        this.cartService.updateCartItem(cartItem);
      }
    }
    action ? product.quantity++ : product.quantity--;
  }
  /**
   * Calculates the discounted price of a product.
   *
   * @param {any} product - The product object.
   * @return {number} The discounted price of the product.
   */
  calculateDiscountedPrice(product: any) {
    let discountedPrice =
      product.price - (product.price * product.discountPercentage) / 100;
    return Math.round(discountedPrice * 100) / 100;
  }

  /**
   * Check if the user is logged in.
   *
   * @return {boolean} Returns true if the user is logged in, false otherwise.
   */
  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('userProfile');
  }
}
