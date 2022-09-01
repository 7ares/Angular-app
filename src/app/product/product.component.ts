import { Component, Input, OnInit } from '@angular/core'
import { ProductServerService } from '../services/product-server.service'
import { productDetail } from '../models/productDetail'

import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any = []
  SingleProduct: any
  amount: number = 0

  constructor(
    private productServer: ProductServerService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    // get all products
    this.productServer.getProducts().subscribe((data) => {
      this.product = data.products
    })
  }
  // add pro to cart list
  addProduct(id: number) {
    this.SingleProduct = this.product.filter(function (i: productDetail) {
      return i.id === id
    })
    this.SingleProduct[0].amount = this.amount
    this.cartService.productData.push(this.SingleProduct[0])
  }

  addAmount(x: number) {
    this.amount = x
  }
}
