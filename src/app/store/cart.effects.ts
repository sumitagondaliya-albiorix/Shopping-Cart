import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { ProductService } from '../Service/product.service';
import * as CartActions from './cart.actions';
import { select, Store } from '@ngrx/store';
import { selectCartItems } from './cart.selectors';

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

  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addToCart),
      withLatestFrom(this.store.pipe(select(selectCartItems))),
      filter(([action, cartItems]) => !cartItems.includes(action.product.id)),
      mergeMap(([action]) =>
        this.productService
          .getProducts(action.product.id)
          .pipe(map((product) => CartActions.addToCart({ product })))
      )
    )
  );
}
