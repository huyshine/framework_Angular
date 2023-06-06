import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/API/data/data.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/API/Cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  totalPrice : number = this.cartService.getCartTotalPrice();
  totalQuantity : number = this.cartService.getCartTotalQuantity();
  carts : any = [];


  constructor(
    private router : Router,
    private data : DataService,
    private cartService : CartService,
  ) { }

  ngOnInit() {
    this.carts =  this.cartService.GetCart();
    console.log(this.carts);
    
    
  }


  

  
}
