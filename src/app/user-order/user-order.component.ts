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

  userinfo: any[] = []
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.userinfo = this.cartService.userData

    this.userName = this.userinfo[0]
    this.orderPrice = this.userinfo[1]

    this.cartService.clearUserData()
  }
}
