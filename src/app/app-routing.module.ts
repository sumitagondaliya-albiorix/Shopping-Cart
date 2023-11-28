import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '', component: ProductListComponent },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
  },
  // { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'signup', component: SignupComponent },
  // {path: 'login' ,component:LoginComponent},
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  { path: 'profile', component: ProfileComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
