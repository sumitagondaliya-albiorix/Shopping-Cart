import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ProductService } from '../service/product.service';
import { Store } from '@ngrx/store';

@Injectable()
export class CartEffects {
  /**
+   * Constructor for the class.
+   *
+   * @param {Actions} actions$ - The actions observable.
+   * @param {ProductService} productService - The product service.
+   * @param {Store} store - The store.
+   */

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store
  ) {}
}
