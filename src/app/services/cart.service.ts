import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  productData: any[] = [] ;
userName: string = "";
totalPrice:number =0;

clearData(){
this.productData = [] ;
}



}
