import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/API/Products/product-service.service';
import { CartService } from 'src/app/API/Cart/cart.service';
import { DataService } from 'src/app/API/data/data.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string | undefined;
  products: any[] | undefined;


  carts : any = this.cartService.GetCart();
  totalPrice : number = this.cartService.getCartTotalPrice();
  totalQuantity : number = this.cartService.getCartTotalQuantity();

  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private cartService : CartService,
    private data : DataService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProduct();
    });

    
    this.data.changeData({
      quantity : this.cartService.getCartTotalQuantity()
    })

  }

  getProduct(): void {


    if (this.productId !== undefined && this.productId !== null) {
      if (this.productId) {
        this.productService.getDetail(this.productId).subscribe(
          products => this.products = products.datas,
      // data => console.log(data),
      
          error => console.log(error)
        );
      }
    }
  }

  



  addToCart(product : any) {
    // Xử lý logic khi người dùng bấm nút "Add to Cart"
    // console.log(product);
    let idx = this.carts.findIndex((item: any) => {
      return item.id == product._id
    })
    if (idx >= 0) {
      this.carts[idx].quantity += 1; 
    }else{
      let cartItem: any = {
        id: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
        subtotal: function (){
          return this.price * this.quantity;
        }
  
      }
      this.carts.push(cartItem);
      
    }
    console.log(this.carts);
    
    // console.log(this.carts[0].subtotal());
    // Luu vao localstorage

    this.cartService.saveCart(this.carts)
    this.data.changeData({
      quantity: this.cartService.getCartTotalQuantity()
    })
    // alert('thêm giỏ hàng thành công')
    swal('thêm giỏ hàng thành công')

  }


  









}
