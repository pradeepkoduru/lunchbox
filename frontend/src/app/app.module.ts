import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './components/home/home.component';
import { NgxStripeModule } from 'ngx-stripe';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { AppComponent } from './app.component';
import { CheckoutService } from './services/checkout.service';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddressSearchModalComponent } from './components/address-search-modal/address-search-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AdressSearchComponent } from './components/adress-search/adress-search.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { OrderComponent } from './components/order/order.component';
@NgModule({
  declarations: [
    AppComponent,
        HomeComponent,
    ProductListComponent,
    ShoppingCartComponent,
    AddressSearchModalComponent,
    ModalComponent,
    AdressSearchComponent,
    OrderComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GooglePlaceModule,
     NgbModule.forRoot(),
NgHttpLoaderModule.forRoot(),
AgmCoreModule.forRoot({
     apiKey: 'AIzaSyC2Pd0kBVMeiHmAg1waXYyov8QPNb4RaX8&libraries',
     libraries: ['geometry']
   }),
   NgxStripeModule.forRoot('pk_test_RInXie0Z1yjLjBjKh01BnlbS')

  ],
  providers: [

    ProductService,
    CartService,
    NgbActiveModal,
    CheckoutService


  ],
  bootstrap: [AppComponent],
  entryComponents: [
   AddressSearchModalComponent,
   ProductListComponent
 ]

})
export class AppModule { }
