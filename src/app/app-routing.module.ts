import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ProductlistComponent} from './productlist/productlist.component'
import {SignupComponent} from './signup/signup.component'
import { MyAccountComponent } from './my-account/my-account.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'myaccount' , component:MyAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
