import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { ShoppingCart } from '../../models/shopping-cart';
import { CartItem } from '../../models/cart-item';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
	private serverPath = AppConst.serverPath;
private isCartEmpty:boolean=false;
	private cartItemList: CartItem[] = [];
	private shoppingCart: ShoppingCart = new ShoppingCart();
private subscription : Subscription;
private cartTotal:number;

  constructor(
  		private router:Router,
  		private cartService: CartService
  	) { }


  ngOnInit() {

this.cartService.getCartItem().subscribe(res=>
this.shoppingCart=res

,
err=>{
  console.log(err);
});


        this.updateCartData();
  }

  onRemoveCartItem(cartItem: CartItem) {
  	this.cartService.removeCartItem(cartItem).subscribe(
  		res => {
  			console.log(res);

  		},
  		error => {
  			console.log(error);
  		}
  	);
  }

updateCartData()
{

      this.cartService.shoppingCartState.subscribe((state :ShoppingCart ) => {
                  this.cartItemList = state.cartItem;
                this.cartTotal=state.cartTotal;
                  console.log( this.cartItemList);
                  if(this.cartItemList!=undefined && this.cartItemList.length!=0 )
                  {
                    this.isCartEmpty=true;
                  }
                  else{
                    this.isCartEmpty=false;
                  }
              });

}
}
