import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { OrderType } from 'src/app/common/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:8080/api/order'

constructor(private http : HttpClient) { }



GetCart() {
  let cartJson = sessionStorage.getItem('cart');
  
  if(cartJson){
    return JSON.parse(cartJson);
  }else {
    return [];
  }
}


saveCart(carts : any ){
  let cartJson = JSON.stringify(carts)
  sessionStorage.setItem('cart' , cartJson)
}

getCartTotalQuantity(){
  let carts = this.GetCart();
  let total: number = 0;
  carts.forEach((item : any) => {
    total += item.quantity
    
  });
  return total;
}
getCartTotalPrice(){
  let carts = this.GetCart();
  let total: number = 0;
  carts.forEach((item : any) => {
    total += item.price * item.quantity
    
  });
  return total;
}

createOrder(order: any) : Observable<any>{
  // return instance.post(url, order);
  return this.http.post<any>(this.apiUrl, order);

};

}
