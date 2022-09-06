import { Component, OnInit } from '@angular/core'
import { CartService } from '../services/cart.service'
import {  Subscription } from 'rxjs'
import { faTrash , faCircleXmark } from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-pro-cart',
  templateUrl: './pro-cart.component.html',
  styleUrls: ['./pro-cart.component.css'],
})
export class ProCartComponent implements OnInit {
  cartList: any[] = []
  price: number = 0
  userName: string = ''
  address: string = ''
  userCard:number = 0
  deleteIcon = faTrash ;
  xMark = faCircleXmark;

  userData: any[] = []

  subscrition: Subscription = new Subscription()
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.productData
    this.getTotalPrice()
  }

  getTotalPrice() {
    this.price = 0;
    this.cartList.forEach((i) => {
      let amount = i.amount
      let price = i.price

      this.price += amount * price
    })
  }
  onSubmit() {
    this.cartService.clearData()

    this.cartService.userName = this.userName
    this.cartService.totalPrice =this.price ;
  }
  deleteItem(i:number){
    this.cartList.splice(i,1);
    this.getTotalPrice();
    window.alert("The Product successfully delelted")
  }

  onUserNameChange(value:string){
    this.userName = value ;
  }
}
