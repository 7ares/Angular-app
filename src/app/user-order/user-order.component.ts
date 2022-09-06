import { Component, OnInit } from '@angular/core'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent implements OnInit {
  userName: string = ''
  orderPrice: number = 0

 
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.userName = this.cartService.userName

   
    this.orderPrice = this.cartService.totalPrice

   
  }
}
