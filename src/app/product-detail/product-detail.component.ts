import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { productDetail } from '../models/productDetail'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  ischecked = faCircleCheck ;
  isProChecked = false ;
  @Input() product: any

  selectedAmount: number = 0

  productQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  @Output() prodcCart: EventEmitter<number> = new EventEmitter()
  @Output() cartAmount: EventEmitter<number> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  getProId(id: number) {
    this.prodcCart.emit(id)
    this.isProChecked = true
  }
  getAmountPro() {
    this.cartAmount.emit(this.selectedAmount)
    console.log('selected', this.selectedAmount)
  }
}
