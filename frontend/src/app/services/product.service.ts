import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable }     from 'rxjs/Observable';
import {AppConst} from '../constants/app-const';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  getProductList() : Observable<Product[]> {
  	//let url = "location.origin"+"/api/products";
let url="https://cloudsql-dot-lunchbox-223320.appspot.com/api/products";
  	let tokenHeader = new HttpHeaders({
  		'Content-Type' : 'application/json'
  	});
  	return this.http.get<Product[]>(url, {headers: tokenHeader});
  }



}
