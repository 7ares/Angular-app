import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core'
import { faStar,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { ProductServerService } from '../services/product-server.service'
import { productDetail } from '../models/productDetail'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-display-pro-detail',
  templateUrl: './display-pro-detail.component.html',
  styleUrls: ['./display-pro-detail.component.css'],
})
export class DisplayProDetailComponent implements OnInit {
  // bind to selected amount that user choose
  selectedAmount: string = ''
  // cathc img element to can manipulat it and change pic onClick
  @ViewChild('mainImg') mainImg: any
  // create option in select element without creates many options use *ngFor
  productQuantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // get icon from fontawesome
  faStar = faStar
  ischecked = faCheckCircle ;
  isProChecked : boolean = false ;

  // change main pic of pro and present another that user clicked on
  viewPic(src: string, index: number) {
    let a = this.prodImgs.nativeElement.querySelectorAll('.prodImgs')
    let imgSrc = this.mainImg.nativeElement.src

    this.render.setAttribute(this.mainImg.nativeElement, 'src', src)
    a[index].setAttribute('src', imgSrc)
  }

  singleProduct: productDetail = new productDetail()
  singlePro: any[] = []
  id: number = -1
  images: string[] = []

  private routeSub: Subscription = new Subscription()
  constructor(
    private productServer: ProductServerService,
    private render: Renderer2,
    private route: ActivatedRoute,
    private prodImgs: ElementRef,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id']
    })
    // get single product with it's id
    this.productServer
      .getSingleProduct(`https://dummyjson.com/products/${this.id}`)
      .subscribe((data) => {
        this.singleProduct = data
        this.singlePro.push(this.singleProduct)
        for (let i = 0; i < 4; i++) {
          this.images.push(this.singleProduct.images[i])
        }
      })
  }

  // ad pro with it's amount to cartList
  getSelectedAmount() {
    let pro =this.singleProduct ;
    let proAmount = parseInt(this.selectedAmount) ; 
    let isExist = false ;
    this.isProChecked = true;
    
    this.cartService.productData.filter(function(x){
      if(pro.id == x.id){
        x.amount += proAmount
        isExist = true ;
        console.log("update")
        }
        
    })

   if(!isExist){
    pro.amount = proAmount ;
    this.cartService.productData.push(this.singleProduct);
    
    console.log("push")
   }

    
   console.log(isExist)
}
}
