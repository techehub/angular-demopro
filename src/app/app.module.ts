import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { CategoryReducer } from './category.reducer';
import {Service} from './service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SignupComponent } from './signup/signup.component';
import { ProductinfoComponent } from './productinfo/productinfo.component'
import {FormsModule} from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component'
import { AuthServiceService } from './auth-service.service';
import { AuthInterceptor } from './auth-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ProductlistComponent,
    SignupComponent,
    ProductinfoComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ category: CategoryReducer })
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Service, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
