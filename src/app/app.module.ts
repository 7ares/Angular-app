import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayProDetailComponent } from './display-pro-detail/display-pro-detail.component';
import { ProCartComponent } from './pro-cart/pro-cart.component'
import { FormsModule } from '@angular/forms';
import { UserOrderComponent } from './user-order/user-order.component';

@NgModule
({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    DisplayProDetailComponent,
    ProCartComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
