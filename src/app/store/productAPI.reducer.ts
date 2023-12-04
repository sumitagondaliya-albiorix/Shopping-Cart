import { createReducer, on } from '@ngrx/store';
import { ProductActions } from './store/productAPI.actions.ts';
import { Product } from '../models/product';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductActions.loadProductsSuccess, (state, action) => ({
    ...state,
    loading: false,
    products: action.products
  })),
  on(ProductActions.loadProductsFail, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
);
