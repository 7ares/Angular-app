import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { productList } from '../models/productList'
import { productDetail } from '../models/productDetail'

@Injectable({
  providedIn: 'root',
})
export class ProductServerService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<productList> {
    return this.http.get<productList>('https://dummyjson.com/products?limit=8')
  }
  getSingleProduct(url: string): Observable<productDetail> {
    return this.http.get<productDetail>(url)
  }
}
