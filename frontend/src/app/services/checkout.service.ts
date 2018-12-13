import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';



@Injectable()
export class CheckoutService {

  constructor(private http: Http) { }

  checkout(

  	){
		// let url = AppConst.serverPath+"/checkout/checkout";
		// // let order ={
		// // 	"shippingAddress" : shippingAddress,
		// // 	"billingAddress" : billingAddress,
		// // 	"payment" : payment,
		// // 	"shippingMethod" : shippingMethod
		// // }
    //
  	// let tokenHeader = new Headers({
  	// 	'Content-Type' : 'application/json',
  	// 	'x-auth-token' : localStorage.getItem("xAuthToken")
  	// });
  	// return this.http.post(url, order, {headers: tokenHeader});
  }

  // getUserOrder() {
  // 	let url = AppConst.serverPath+"/checkout/getUserOrder";
  //
  // 	let tokenHeader = new Headers({
  // 		'Content-Type' : 'application/json',
  // 		'x-auth-token' : localStorage.getItem("xAuthToken")
  // 	});
  // 	return this.http.get(url, {headers: tokenHeader});
  //
  // }

}
