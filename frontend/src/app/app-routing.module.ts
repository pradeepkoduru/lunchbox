import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressSearchModalComponent } from './components/address-search-modal/address-search-modal.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
  {
    path: 'checkout',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
