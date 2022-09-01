import { Component, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { application } from 'express'
import { AppComponent } from './app.component'
import { DisplayProDetailComponent } from './display-pro-detail/display-pro-detail.component'
import { ProductComponent } from './product/product.component'
import { ProCartComponent } from './pro-cart/pro-cart.component'
import { UserOrderComponent } from './user-order/user-order.component'
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'detail/:id',
    component: DisplayProDetailComponent,
  },
  { path: 'cart', component: ProCartComponent },
  { path: 'order', component: UserOrderComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
