import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable }     from 'rxjs/Observable';
import {AppConst} from '../constants/app-const';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingCart } from '../models/shopping-cart';
import { CartItem } from '../models/cart-item';
import 'rxjs/add/operator/map';
@Injectable()
export class CartService {
  private shoppingCartSubject = new BehaviorSubject<ShoppingCart>(new ShoppingCart());
    shoppingCartState = this.shoppingCartSubject.asObservable();
  private shoppingCart: ShoppingCart = new ShoppingCart();
  constructor(private http:HttpClient) { }

  addItem(product:Product):Observable<ShoppingCart>  {
    let url =location.origin+"/api/addToCart";
    let cartItemInfo = {
      "productID" : product.productID,
      "qty" : product.qty
    }
    let tokenHeader = new HttpHeaders({
      'Content-Type' : 'application/json'

    });


return this.http.post<ShoppingCart>(url, cartItemInfo, {headers: tokenHeader}).map( res => {
  this.shoppingCart=res;
  this.shoppingCartSubject.next(this.shoppingCart);
  localStorage.setItem("cartItem", JSON.stringify(this.shoppingCart));
  return res;
  },err=>{
    console.log(err);
  });
}

  removeCartItem(cartItem:CartItem):Observable<ShoppingCart> {
    let url = location.origin+"/cart/removeItem";

    let tokenHeader = new HttpHeaders({
      'Content-Type' : 'application/json'

    });
    let cartItemInfo = {
      "productID" : cartItem.productID,
      "qty" : cartItem.qty
    }
    return this.http.post<ShoppingCart>(url, cartItemInfo, {headers: tokenHeader}).map( res => {
      this.shoppingCart=res;
      this.shoppingCartSubject.next(this.shoppingCart);
      localStorage.setItem("cartItem", JSON.stringify(this.shoppingCart));
      return res;
      },err=>{
        console.log(err);
      });
  }



getCartItem():Observable<ShoppingCart> {
  let tokenHeader = new HttpHeaders({
    'Content-Type' : 'application/json'

  });
  let url = location.origin+"/api/addToCart";
  return this.http.get<ShoppingCart>(url,{headers: tokenHeader}).map( res => {

    this.shoppingCart=res;
    this.shoppingCartSubject.next(this.shoppingCart);
    localStorage.setItem("cartItem", JSON.stringify(this.shoppingCart));
    return res;
    },err=>{
      console.log(err);
    });
}



}
