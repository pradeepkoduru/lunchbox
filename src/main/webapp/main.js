(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'checkout',
        component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pac-container{\n    z-index: 100000 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7Q0FDOUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWMtY29udGFpbmVye1xuICAgIHotaW5kZXg6IDEwMDAwMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <ng-http-loader></ng-http-loader>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lunchbox';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/components/product-list/product-list.component.ts");
/* harmony import */ var _components_address_search_modal_address_search_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/address-search-modal/address-search-modal.component */ "./src/app/components/address-search-modal/address-search-modal.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_adress_search_adress_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/adress-search/adress-search.component */ "./src/app/components/adress-search/adress-search.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__["ProductListComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_13__["ShoppingCartComponent"],
                _components_address_search_modal_address_search_modal_component__WEBPACK_IMPORTED_MODULE_15__["AddressSearchModalComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"],
                _components_adress_search_adress_search_component__WEBPACK_IMPORTED_MODULE_17__["AdressSearchComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_20__["OrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"].forRoot(),
                ng_http_loader__WEBPACK_IMPORTED_MODULE_19__["NgHttpLoaderModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC2Pd0kBVMeiHmAg1waXYyov8QPNb4RaX8&libraries',
                    libraries: ['geometry']
                })
            ],
            providers: [
                _services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
                _services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbActiveModal"],
                _services_checkout_service__WEBPACK_IMPORTED_MODULE_12__["CheckoutService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [
                _components_address_search_modal_address_search_modal_component__WEBPACK_IMPORTED_MODULE_15__["AddressSearchModalComponent"],
                _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__["ProductListComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/address-search-modal/address-search-modal.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/address-search-modal/address-search-modal.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkcmVzcy1zZWFyY2gtbW9kYWwvYWRkcmVzcy1zZWFyY2gtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/address-search-modal/address-search-modal.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/address-search-modal/address-search-modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal title=\"Address Search\">\n  <app-adress-search></app-adress-search>\n</app-modal>\n"

/***/ }),

/***/ "./src/app/components/address-search-modal/address-search-modal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/address-search-modal/address-search-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddressSearchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressSearchModalComponent", function() { return AddressSearchModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressSearchModalComponent = /** @class */ (function () {
    function AddressSearchModalComponent() {
    }
    AddressSearchModalComponent.prototype.ngOnInit = function () {
    };
    AddressSearchModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address-search-modal',
            template: __webpack_require__(/*! ./address-search-modal.component.html */ "./src/app/components/address-search-modal/address-search-modal.component.html"),
            styles: [__webpack_require__(/*! ./address-search-modal.component.css */ "./src/app/components/address-search-modal/address-search-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressSearchModalComponent);
    return AddressSearchModalComponent;
}());



/***/ }),

/***/ "./src/app/components/adress-search/adress-search.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/adress-search/adress-search.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\npac-container\n    z-index: 100000;\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZHJlc3Mtc2VhcmNoL2FkcmVzcy1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO29CQUNvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRyZXNzLXNlYXJjaC9hZHJlc3Mtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxucGFjLWNvbnRhaW5lclxuICAgIHotaW5kZXg6IDEwMDAwMDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/adress-search/adress-search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/adress-search/adress-search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{formattedShowAddress}}\n  <input ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n  <button md-raised-button  (click)=\"onSearch()\" class=\"mat-primary\">Search</button>\n  <div  *ngIf=\"isAdressEntered\" class=\"row\">\n<div  *ngIf=\"isValidAddress\" class=\"row\">\n    <div class=\"col-md-9\">\n        <h3><span  style=\"color:forestgreen\"><i class=\"fa fa-check\" style=\"color:forestgreen\"></i>Adress is valid</span></h3>\n</div>\n</div>\n<div  *ngIf=\"!isValidAddress\" class=\"row\">\n    <div class=\"col-md-9\">\n        <h3><span  style=\"color:red\"><i class=\"fa fa-check\" style=\"color:forestgreen\"></i>Adress is not within our range</span></h3>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/adress-search/adress-search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/adress-search/adress-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdressSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdressSearchComponent", function() { return AdressSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */ "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdressSearchComponent = /** @class */ (function () {
    function AdressSearchComponent(activeModal, mapsAPILoader) {
        this.activeModal = activeModal;
        this.mapsAPILoader = mapsAPILoader;
        this.zoom = 5;
        this.markers = [];
        this.filteredMarkers = [];
        this.isValidAddress = false;
        this.isAdressEntered = false;
        this.formattedAddress = "";
        this.formattedShowAddress = "";
    }
    AdressSearchComponent.prototype.ngOnInit = function () {
    };
    AdressSearchComponent.prototype.getLocations = function () {
        return [
            { 'latitude': 35.869650, 'longitude': -78.854780 }
        ];
    };
    AdressSearchComponent.prototype.handleAddressChange = function (address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.lat = address.geometry.location.lat();
        this.lon = address.geometry.location.lng();
        this.formattedAddress = address.formatted_address;
        console.log(address.formatted_address);
    };
    AdressSearchComponent.prototype.onSearch = function () {
        var _this = this;
        this.isAdressEntered = true;
        this.markers = this.getLocations();
        this.mapsAPILoader.load().then(function () {
            var center = new google.maps.LatLng(_this.lat, _this.lon);
            _this.filteredMarkers = _this.markers.filter(function (m) {
                var markerLoc = new google.maps.LatLng(m.latitude, m.longitude);
                var distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000;
                console.log(distanceInKm);
                if (distanceInKm < 16.0934) {
                    _this.isValidAddress = true;
                    localStorage.setItem("addressSearched", "true");
                    _this.activeModal.close('Search click');
                    _this.formattedShowAddress = _this.formattedAddress;
                    return m;
                }
                else {
                    _this.isValidAddress = false;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('places'),
        __metadata("design:type", ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__["GooglePlaceDirective"])
    ], AdressSearchComponent.prototype, "places", void 0);
    AdressSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adress-search',
            template: __webpack_require__(/*! ./adress-search.component.html */ "./src/app/components/adress-search/adress-search.component.html"),
            styles: [__webpack_require__(/*! ./adress-search.component.css */ "./src/app/components/adress-search/adress-search.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"]])
    ], AdressSearchComponent);
    return AdressSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-adress-search></app-adress-search>\n\n\t<app-product-list></app-product-list>\n\t<app-shopping-cart></app-shopping-cart>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div role=\"document\" class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.title = "Information";
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "title", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <hr style=\"position: absolute;width:85%; height:6px; background-color: #333; z-index:-1; margin-top: -170px;\" />\n    <div class=\"row\" style=\"margin-top: 120px;\">\n        <form (ngSubmit)=\"onSubmit()\" method=\"post\">\n            <div class=\"col-xs-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <button md-raised-button type=\"submit \" class=\"btn-block mat-primary\">Place your order\n                        </button>\n                        <p style=\"font-size: smaller\">By placing your order, you agree to Le's Bookstore <a href=\"#\">privacy</a> notice and\n                            <a href=\"#\">conditions</a> of use.</p>\n                        <hr/>\n                        <h3>Order Summary</h3>\n                        <div class=\"row\">\n                            <div class=\"col-xs-7 text-left\">\n                                Total before tax:\n                            </div>\n                            <div class=\"col-xs-5 text-right\">\n                                $\n                                <span>{{cartItemNumber}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"row \">\n                            <div class=\"col-xs-7 text-left \">\n                                <h3 style=\"color:darkred; \"><strong>Order total:</strong></h3>\n                            </div>\n                            <div class=\"col-xs-5 text-right \">\n                                <h3><strong style=\"color:darkred; \">$<span\n                                        >{{cartItemNumber*1.06 | number : '1.2-2'}}</span>\n                                </strong></h3>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-8 \">\n                <div *ngIf=\"missingRequiredField \">\n                    <h5 class=\"alert alert-warning \">There are some fields missing. Field with * is required. </h5>\n                </div>\n\n                    <!--1. Shipping Address-->\n\n                    <!--2. Payment Information-->\n\n                        <div class=\"panel panel-default \">\n                            <div class=\"panel-heading \">\n                                <h4 class=\"panel-title \">\n                                    Payment Information\n                            </h4>\n                            </div>\n                            <div class=\"panel-body \">\n\n                                <!-- CREDIT CARD FORM STARTS HERE -->\n                                <div class=\"row\">\n                                    <div class=\"col-xs-12\">\n                                        <img src=\"../../../assets/image/creditcard.png\" class=\"img-responsive\" />\n                                        <br/>\n                                        <div class=\"form-group\">\n                                            <label for=\"cardType\">* Select Card Type:</label>\n                                            <select class=\"form-control\" id=\"cardType\" name=\"type\" >\n                                                <option value=\"\" disabled=\"disabled\">\n                                                    -- Card Type --\n                                                </option>\n                                                <option value=\"visa\">Visa</option>\n                                                <option value=\"mastercard\">Mastercard</option>\n                                                <option value=\"discover\">Discover</option>\n                                                <option value=\"amex\">American Express</option>\n                                            </select>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"cardHolder\">* Card Holder</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"cardHolder\" required=\"required\" placeholder=\"Card Holder Name\" name=\"holderName\"  />\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"cardNumber\">* Card Number</label>\n                                            <div class=\"input-group\">\n                                                <input required=\"required\" id=\"cardNumber\" type=\"tel\" class=\"form-control\" name=\"cardNumber\" placeholder=\"Valid Card Number\" name=\"cardNumber\"  />\n                                                <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"\n                                                                                           aria-hidden=\"true\"></i></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-xs-7 col-md-7\">\n                                        <div class=\"form-group\">\n                                            <label>* Expiration Date</label>\n                                            <div class=\"row\">\n                                                <div class=\"col-xs-6\">\n                                                    <select class=\"form-control\" name=\"expiryMonth\" required=\"required\" >\n                                                        <option value=\"\" disabled=\"disabled\">\n                                                            --Month--\n                                                        </option>\n                                                        <option value=\"1\">Jan (01)</option>\n                                                        <option value=\"2\">Feb (02)</option>\n                                                        <option value=\"3\">Mar (03)</option>\n                                                        <option value=\"4\">Apr (04)</option>\n                                                        <option value=\"5\">May (05)</option>\n                                                        <option value=\"6\">June (06)</option>\n                                                        <option value=\"7\">July (07)</option>\n                                                        <option value=\"8\">Aug (08)</option>\n                                                        <option value=\"9\">Sep (09)</option>\n                                                        <option value=\"10\">Oct (10)</option>\n                                                        <option value=\"11\">Nov (11)</option>\n                                                        <option value=\"12\">Dec (12)</option>\n                                                    </select>\n                                                </div>\n                                                <div class=\"col-xs-6\">\n                                                    <select class=\"form-control\" name=\"expiryYear\" >\n                                                        <option value=\"\" disabled=\"disabled\">--Year--\n                                                        </option>\n                                                        <option value=\"17\">2017</option>\n                                                        <option value=\"18\">2018</option>\n                                                        <option value=\"19\">2019</option>\n                                                        <option value=\"20\">2020</option>\n                                                        <option value=\"21\">2021</option>\n                                                        <option value=\"22\">2022</option>\n                                                        <option value=\"23\">2023</option>\n                                                        <option value=\"23\">2024</option>\n                                                        <option value=\"23\">2025</option>\n                                                        <option value=\"23\">2026</option>\n                                                        <option value=\"23\">2027</option>\n                                                        <option value=\"23\">2028</option>\n                                                        <option value=\"23\">2029</option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-5 col-md-5 pull-right\">\n                                        <div class=\"form-group\">\n                                            <label for=\"cardCVC\">CV Code</label>\n                                            <input id=\"cardCVC\" type=\"tel\" class=\"form-control\" name=\"cardCVC\" placeholder=\"CVC\" name=\"cvc\"  />\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- CREDIT CARD FORM ENDS HERE -->\n\n                                <div class=\"form-group \">\n                                    <label for=\"billingName \">* Name</label>\n                                    <input type=\"text \" class=\"form-control billingAddress \" id=\"billingName \" placeholder=\"Recevier Name \" name=\"billingAddressName \" />\n                                </div>\n                                <div class=\"form-group \">\n                                    <label for=\"billingAddress \">* Street Address</label>\n                                    <input type=\"text \" id=\"billingAddress \" class=\"form-control billingAddress \" placeholder=\"Street Address 1 \" name=\"billingAddressStreet1 \"  />\n                                </div>\n                                <div class=\"form-group \">\n                                    <input type=\"text \" class=\"form-control billingAddress \" placeholder=\"Street Address 2 \" name=\"billingAddressStreet2 \"  />\n                                </div>\n                                <div class=\"row \">\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"billingCity \">* City</label>\n                                            <input type=\"text \" class=\"form-control billingAddress \" id=\"billingCity \" placeholder=\"City \" name=\"billingAddressCity \"  />\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"billingState \">* State</label>\n                                            <select id=\"billingState \" class=\"form-control billingAddress \" name=\"billingAddressState \" >\n                                                <option value=\"\" disabled=\"disabled \">-- state --\n                                                </option>\n\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-4 \">\n                                        <div class=\"form-group \">\n                                            <label for=\"billingZipcode \">* Zipcode</label>\n                                            <input type=\"text \" class=\"form-control billingAddress \" id=\"billingZipcode \" placeholder=\"Zipcode \" name=\"billingAddressZipcode \"  />\n                                        </div>\n                                    </div>\n                                </div>\n                                <a md-raised-button class=\"mat-primary\" (click)=\"goToReview()\">Next</a>\n                            </div>\n                        </div>\n\n\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app-const */ "./src/app/constants/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/checkout.service */ "./src/app/services/checkout.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/shopping-cart */ "./src/app/models/shopping-cart.ts");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/order */ "./src/app/models/order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderComponent = /** @class */ (function () {
    function OrderComponent(router, cartService, checkoutService) {
        this.router = router;
        this.cartService = cartService;
        this.checkoutService = checkoutService;
        this.serverPath = _constants_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
        this.cartItemList = [];
        this.shoppingCart = new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__["ShoppingCart"]();
        this.order = new _models_order__WEBPACK_IMPORTED_MODULE_6__["Order"]();
    }
    OrderComponent.prototype.getCartItemList = function () {
        var _this = this;
        this.cartService.getCartItem().subscribe(function (res) {
            _this.shoppingCart = res;
            _this.cartItemList = _this.shoppingCart.cartItem;
            _this.cartItemNumber = _this.shoppingCart.cartTotal;
            if (_this.cartItemList == undefined || _this.cartItemList.length == 0) {
                _this.router.navigate(['/home']);
            }
        }, function (error) {
            console.log(error);
            _this.router.navigate(['/home']);
        });
    };
    OrderComponent.prototype.onSubmit = function () {
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
    };
    OrderComponent.prototype.ngOnInit = function () {
        this.getCartItemList();
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _services_checkout_service__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/product-list/product-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-8\">\n            <h2 class=\"section-headline\"><span>Product Shelf</span></h2>\n        </div>\n</div>\n    <div  *ngIf=\"addProductSuccess\" class=\"row\">\n\n    \t<div class=\"col-md-9\">\n          <h3><span  style=\"color:forestgreen\"><i class=\"fa fa-check\" style=\"color:forestgreen\"></i>Added to cart.</span></h3>\n</div>\n</div>\n<div class=\"row\">\n\n    \t\t\t\t<div *ngFor = \"let product of productList\">\n\n    \t\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                  \t<div style=\"margin-bottom: 30px;\">\n                  <span>Qty: </span>\n                  <select [(ngModel)]=\"product.qty\" class=\"browser-default\" style=\"width:50px; display:inline;\">\n                      <option *ngFor=\"let x of numberList\" [ngValue]=\"x\">{{x}}</option>\n                  </select>\n\n\n    \t\t\t\t\t\t\t\t<p>{{product.description}}</p>\n\n                  \t<button md-raised-button  (click)=\"onAddToCart(product)\" class=\"mat-primary\">Add to Cart</button>\n                  \t<span>$<span>{{product.price}}</span></span>\n    \t\t\t\t\t\t</div>\n\n\n\n    \t\t</div>\n\n\n    \t</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product-list/product-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-list/product-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _address_search_modal_address_search_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address-search-modal/address-search-modal.component */ "./src/app/components/address-search-modal/address-search-modal.component.ts");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/app-const */ "./src/app/constants/app-const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, cartService, modalService) {
        this.productService = productService;
        this.cartService = cartService;
        this.modalService = modalService;
        this.numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.serverPath = _constants_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].serverPath;
        this.addProductSuccess = false;
        this.addProductFailed = false;
    }
    ProductListComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
        console.log("Product Selected" + product.qty);
    };
    ProductListComponent.prototype.onAddToCart = function (product) {
        var _this = this;
        if (localStorage.getItem("addressSearched") == null) {
            this.open();
        }
        else {
            this.cartService.addItem(product).subscribe(function (res) {
                _this.addProductSuccess = true;
            }, function (err) {
                console.log(err);
            });
        }
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductList().subscribe(function (productList) { return _this.productList = productList; }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.open = function () {
        // const modalRef = this.modalService.open(ModalComponent);
        var modalRef = this.modalService.open(_address_search_modal_address_search_modal_component__WEBPACK_IMPORTED_MODULE_4__["AddressSearchModalComponent"]);
        modalRef.componentInstance.title = 'About';
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/components/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/components/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-8\">\n            <h2 class=\"section-headline\"><span>Shopping Cart</span></h2>\n        </div>\n\n    </div>\n<h1>Cart Total:</h1>${{cartTotal}}\n    <div class=\"row\" style=\"margin-top: 120px;\">\n        <div class=\"col-xs-12\">\n<div class=\"row\" *ngFor=\"let cartItem of cartItemList\">\n                {{cartItem.qty}}\n                <button md-raised-button  (click)=\"onRemoveCartItem(cartItem)\" class=\"mat-primary\">Remove Item</button>\n\n                </div>\n\n        </div>\n    </div>\n\n    <button routerLink=\"/checkout\" class=\"mat-primary\" title=\"Check Out\">Check Out\n    <i class=\"fa fa-chevron-right fa-fw\"></i>\n</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/app-const */ "./src/app/constants/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/shopping-cart */ "./src/app/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(router, cartService) {
        this.router = router;
        this.cartService = cartService;
        this.serverPath = _constants_app_const__WEBPACK_IMPORTED_MODULE_1__["AppConst"].serverPath;
        this.isCartEmpty = false;
        this.cartItemList = [];
        this.shoppingCart = new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"]();
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCartItem().subscribe(function (res) {
            return _this.shoppingCart = res;
        }, function (err) {
            console.log(err);
        });
        this.updateCartData();
    };
    ShoppingCartComponent.prototype.onRemoveCartItem = function (cartItem) {
        this.cartService.removeCartItem(cartItem).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ShoppingCartComponent.prototype.updateCartData = function () {
        var _this = this;
        this.cartService.shoppingCartState.subscribe(function (state) {
            _this.cartItemList = state.cartItem;
            _this.cartTotal = state.cartTotal;
            console.log(_this.cartItemList);
            if (_this.cartItemList != undefined && _this.cartItemList.length != 0) {
                _this.isCartEmpty = true;
            }
            else {
                _this.isCartEmpty = false;
            }
        });
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/constants/app-const.ts":
/*!****************************************!*\
  !*** ./src/app/constants/app-const.ts ***!
  \****************************************/
/*! exports provided: AppConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConst", function() { return AppConst; });
var AppConst = /** @class */ (function () {
    function AppConst() {
    }
    AppConst.serverPath = 'http://127.0.0.1:8181';
    return AppConst;
}());



/***/ }),

/***/ "./src/app/models/order.ts":
/*!*********************************!*\
  !*** ./src/app/models/order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/shopping-cart.ts":
/*!*****************************************!*\
  !*** ./src/app/models/shopping-cart.ts ***!
  \*****************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _models_shopping_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/shopping-cart */ "./src/app/models/shopping-cart.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.shoppingCartSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"]());
        this.shoppingCartState = this.shoppingCartSubject.asObservable();
        this.shoppingCart = new _models_shopping_cart__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"]();
    }
    CartService.prototype.addItem = function (product) {
        var _this = this;
        var url = location.origin + "/api/addToCart";
        var cartItemInfo = {
            "productID": product.productID,
            "qty": product.qty
        };
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(url, cartItemInfo, { headers: tokenHeader }).map(function (res) {
            _this.shoppingCart = res;
            _this.shoppingCartSubject.next(_this.shoppingCart);
            localStorage.setItem("cartItem", JSON.stringify(_this.shoppingCart));
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    CartService.prototype.removeCartItem = function (cartItem) {
        var _this = this;
        var url = location.origin + "/cart/removeItem";
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var cartItemInfo = {
            "productID": cartItem.productID,
            "qty": cartItem.qty
        };
        return this.http.post(url, cartItemInfo, { headers: tokenHeader }).map(function (res) {
            _this.shoppingCart = res;
            _this.shoppingCartSubject.next(_this.shoppingCart);
            localStorage.setItem("cartItem", JSON.stringify(_this.shoppingCart));
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    CartService.prototype.getCartItem = function () {
        var _this = this;
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var url = location.origin + "/api/addToCart";
        return this.http.get(url, { headers: tokenHeader }).map(function (res) {
            _this.shoppingCart = res;
            _this.shoppingCartSubject.next(_this.shoppingCart);
            localStorage.setItem("cartItem", JSON.stringify(_this.shoppingCart));
            return res;
        }, function (err) {
            console.log(err);
        });
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/checkout.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/checkout.service.ts ***!
  \**********************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
    }
    CheckoutService.prototype.checkout = function () {
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
    };
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductList = function () {
        //let url = "location.origin"+"/api/products";
        var url = "https://cloudsql-dot-lunchbox-223320.appspot.com/api/products";
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.get(url, { headers: tokenHeader });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarathtripuraneni/lunchbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map