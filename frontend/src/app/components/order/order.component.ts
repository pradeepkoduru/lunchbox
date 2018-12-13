import { Component, OnInit,ViewChild , ElementRef,ChangeDetectorRef,OnDestroy} from '@angular/core';
import {AppConst} from '../../constants/app-const';
import {Product} from '../../models/product';
import {Router, NavigationExtras} from "@angular/router";
import {CartService} from '../../services/cart.service';
import {CheckoutService} from '../../services/checkout.service';
import { CartItem } from '../../models/cart-item';
import { ShoppingCart } from '../../models/shopping-cart';
import { Order } from '../../models/order';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule  } from "@angular/forms";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // @ViewChild(StripeCardComponent) card: StripeCardComponent;
  @ViewChild('cardInfo') cardInfo: ElementRef;
  @ViewChild('cvv') cvv: ElementRef;
    @ViewChild('exp') exp: ElementRef;
  private serverPath = AppConst.serverPath;
  private selectedProduct: Product;
  private cartItemList: CartItem[] = [];
  private cartItemNumber: number;
  private shoppingCart: ShoppingCart = new ShoppingCart();
  private cartItemUpdated:boolean;
  private shippingMethod:string;
  private order:Order = new Order();

  // cardOptions: ElementOptions = {
  //     style: {
  //       base: {
  //         iconColor: '#666EE8',
  //         color: '#31325F',
  //         lineHeight: '40px',
  //         fontWeight: 300,
  //         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
  //         fontSize: '18px',
  //         '::placeholder': {
  //           color: '#CFD7E0'
  //         }
  //       }
  //     }
  //   };
  //
  //   elementsOptions: ElementsOptions = {
  //     locale: 'en'
  //   };

    // stripeTest: FormGroup;
    card: any;
    expiry: any;
    cvvNum: any;
    cardHandler = this.onChange.bind(this);
    error: string;
   elements = stripe.elements();
    const style = {
        base: {
          lineHeight: '24px',
          fontFamily: 'monospace',
          fontSmoothing: 'antialiased',
          fontSize: '19px',
          '::placeholder': {
            color: 'purple'
          }
        }
      };
  constructor(
  	private router:Router,
  	private cartService: CartService,
  	private checkoutService: CheckoutService,
    private cd: ChangeDetectorRef
    // private fb: FormBuilder,
    // private stripeService: StripeService
  	) { }



    ngAfterViewInit() {
       this.card = elements.create('cardNumber',{
    'placeholder': '',
    'style': this.style
  });

       this.card.mount(this.cardInfo.nativeElement);
       this.card.addEventListener('change', this.cardHandler);

       this.expiry = elements.create('cardExpiry');
       this.expiry.mount(this.exp.nativeElement);
       this.expiry.addEventListener('change', this.cardHandler);

       this.cvvNum = elements.create('cardCvc');
       this.cvvNum.mount(this.cvv.nativeElement);

       this.cvvNum.addEventListener('change', this.cardHandler);
     }

     ngOnDestroy() {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
      }




  getCartItemList(){
    this.cartService.getCartItem().subscribe(
      res=>{
        this.shoppingCart = res;
        this.cartItemList = this.shoppingCart.cartItem;
      this.cartItemNumber=this.shoppingCart.cartTotal;
      // if(this.cartItemList==undefined || this.cartItemList.length==0)
      // {
      //   this.router.navigate(['/home']);
      // }

      },
      error=>{
        console.log(error);
      //  this.router.navigate(['/home']);
      }
      );
  }


  onChange({ error }) {
      if (error) {
        this.error = error.message;
      } else {
        this.error = null;
      }
      this.cd.detectChanges();
    }

    async onSubmit(form: NgForm) {
      let cardInformation={
        cardNumber:this.card;
        expiry:this.expiry ;
        cvv:this.cvv;
      }
      const { token, error } = await stripe.createToken(this.card);

      if (error) {
        console.log('Something is wrong:', error);
      } else {
        console.log('Success!', token);
        // ...send the token to the your backend to process the charge
      }
    }




  // onSubmit(){
  	// this.checkoutService.checkout(
    //   this.shippingAddress,
    //   this.billingAddress,
    //   this.payment,
    //   this.shippingMethod
    //   ).subscribe(
    //   res=>{
    //     this.order=res.json();
    //     console.log(this.order);
    //
    //     let navigationExtras: NavigationExtras = {
    //         queryParams: {
    //             "order": JSON.stringify(this.order)
    //         }
    //     };
    //
    //
    //   },
    //   error=>{
    //     console.log(error.text());
    //   }
    //   );
    // }

    ngOnInit() {
      this.getCartItemList();

      // this.stripeTest = this.fb.group({
      //     name: ['', [Validators.required]]
      //   });
}



        // buy() {
        //    const name = this.stripeTest.get('name').value;
        //    this.stripeService
        //      .createToken(this.card.getCard(), { name })
        //      .subscribe(result => {
        //        if (result.token) {
        //          // Use the token to create a charge or a customer
        //          // https://stripe.com/docs/charges
        //          console.log(result.token.id);
        //        } else if (result.error) {
        //          // Error creating the token
        //          console.log(result.error.message);
        //        }
        //      });
        //  }








  }
