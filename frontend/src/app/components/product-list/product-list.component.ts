import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressSearchModalComponent } from '../address-search-modal/address-search-modal.component';

import {AppConst} from '../../constants/app-const';


@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

private numberList: number[] = [1,2,3,4,5,6,7,8,9];

	private selectedProduct: Product;
	private productList: Product[];
	private serverPath = AppConst.serverPath;
private addProductSuccess: boolean = false;
private addProductFailed: boolean = false;
	constructor(
		private productService:ProductService,
		private cartService:CartService,
		private modalService: NgbModal
		) { }

	onSelect(product: Product) {
		this.selectedProduct = product;
	console.log("Product Selected"+product.qty);
	}


	  onAddToCart(product: Product) {
			if(localStorage.getItem("addressSearched")==null)
			{
			this.open() ;
		}
		else{
	    this.cartService.addItem(product).subscribe(
	      res => {

	       this.addProductSuccess=true;
	      },
	      err => {

	      console.log(err);
	      }
	    );
		}
	  }

	ngOnInit() {
		this.productService.getProductList().subscribe(productList => this.productList = productList
			,
			err => {
				console.log(err);
			}
			);

	}

	open() {
    // const modalRef = this.modalService.open(ModalComponent);
   const modalRef = this.modalService.open(AddressSearchModalComponent);
    modalRef.componentInstance.title = 'About';
  }
}
