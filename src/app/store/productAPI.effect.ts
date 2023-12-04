import { Injectable } from '@angular/core';
import { Actions} from '@ngrx/effects';
import { ProductService } from '../service/product.service';
import { ProductActions } from '../store/productAPI.actions';
import { mergeMap, map, catchError, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    mergeMap(() =>
      this.productService.getProducts().pipe(
        map((products) => ProductActions.loadProductsSuccess(products)),
        catchError((error) => of(ProductActions.loadProductsFail(error)))
      )
    )
  );
}
