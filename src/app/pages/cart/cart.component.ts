import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/API/Cart/cart.service';
import { DataService } from 'src/app/API/data/data.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts : any = [];
  totalPrice : number = this.cartService.getCartTotalPrice();
  totalQuantity : number = this.cartService.getCartTotalQuantity();

  constructor(
    private cartService : CartService,
    private data : DataService
     ) { }

  ngOnInit() : void{
    this.carts = this.cartService.GetCart();
    this.data.changeData({
      quantity: this.cartService.getCartTotalQuantity()
    })
  }

  subTotal(cart: any) {
    return cart.quantity * cart.price
  }

  updateQuantity(idx: number, ev : any){
    let newQuantity = ev.target.value;
    newQuantity =  newQuantity > 0 ? newQuantity : 1
    newQuantity =  newQuantity < 100 ? newQuantity : 100
    ev.target.value = newQuantity
    this.carts[idx].quantity = ev.target.value;
    this.cartService.saveCart(this.carts);
    this.totalPrice  = this.cartService.getCartTotalPrice();
    this.totalQuantity  = this.cartService.getCartTotalQuantity();
    this.data.changeData({
      quantity: this.cartService.getCartTotalQuantity()
    })
  }


  giamSL(idx: number ,quantity: number){
    let newQuantity = Number(quantity) - 1;
    newQuantity =  newQuantity > 0 ? newQuantity : 1
    newQuantity =  newQuantity < 100 ? newQuantity : 100
    this.carts[idx].quantity = newQuantity
    this.cartService.saveCart(this.carts);
    this.totalPrice  = this.cartService.getCartTotalPrice();
    this.totalQuantity  = this.cartService.getCartTotalQuantity();
    this.data.changeData({
      quantity: this.cartService.getCartTotalQuantity()
    })

    
  }
  tangSL(idx: number ,quantity: number){
    let newQuantity = Number(quantity) + 1;
    newQuantity =  newQuantity > 0 ? newQuantity : 1
    newQuantity =  newQuantity < 100 ? newQuantity : 100
    this.carts[idx].quantity = newQuantity
    this.cartService.saveCart(this.carts);
    this.totalPrice  = this.cartService.getCartTotalPrice();
    this.totalQuantity  = this.cartService.getCartTotalQuantity();
    this.data.changeData({
      quantity: this.cartService.getCartTotalQuantity()
    })
  }

  removeCart(idx: number){
   
    // swal('Hello world!')
    let _this = this
  
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(function() {
      swal(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      );
      _this.carts.splice(idx, 1);
      _this.cartService.saveCart(_this.carts);
      _this.data.changeData({
        quantity: _this.cartService.getCartTotalQuantity()
      })
    }, function(dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }



  onClear() {
    let _this =this

    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(function() {
      swal(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      );
      sessionStorage.clear();
      _this.carts = [];
      _this.data.changeData({
        quantity: _this.cartService.getCartTotalQuantity()
      })
    }, function(dismiss) {
      // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
      if (dismiss === 'cancel') {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
