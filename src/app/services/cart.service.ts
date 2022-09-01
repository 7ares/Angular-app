import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  productData: any[] = [] ;
userData: any[] = [] ;

clearData(){
this.productData = [] ;
}

clearUserData(){
  this.userData= [] ;
}

}
