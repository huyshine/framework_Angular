import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/API/data/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/API/Cart/cart.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  totalPrice : number = this.cartService.getCartTotalPrice();
  totalQuantity : number = this.cartService.getCartTotalQuantity();
  carts : any = [];

  credentials = {
    name: '',
    email: '',
    phone: '',
    address : '',
  };

  constructor(
    private router : Router,
    private data : DataService,
    private cartService : CartService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.carts =  this.cartService.GetCart();
    console.log(this.carts);
    this.toastService.success('This is a toast message.');

    // this.onSubmit();
  }

  onSubmit(){
    this.cartService.createOrder({
        userOrder: this.credentials,
        listOrder: this.carts,
        cartTotal: this.totalPrice,
        status: "0",
    }).subscribe(
      (response) => {
        console.log(this.credentials);
        console.log(this.carts);
        console.log(this.totalPrice);
        // console.log();
        this.toastService.success("Order Success, redirect after 3 seconds");
        // this.toastService.toast('This is a toast message.');

        sessionStorage.removeItem("cart");
        // reset();
        setTimeout(() => this.router.navigate(['/thanks']), 3000);
      },
      (error) => {
        console.log(this.credentials);
        console.log(this.carts);
        console.log(this.totalPrice);
        // console.log('Register failed');
        this.toastService.error("Error! Please try again later.");

        // Xử lý lỗi, hiển thị thông báo lỗi cho người dùng
      }
    );
  }



  

  
}
