import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductListComponent } from './product-list/product-list.component';

// const routes: Routes = [
//   { path: '', component: ProductListComponent },
//   { path: 'cart', component: CartComponent },
//   { path: 'products', component: ProductListComponent },
//   { path: 'signup', component:SignupComponent },
//   {path: 'login' ,component:LoginComponent},
//   {path:'profile', component:ProfileComponent}
// ];

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
