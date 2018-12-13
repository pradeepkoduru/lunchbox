import { Component, OnInit,ViewChild } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';

import { Address } from "ngx-google-places-autocomplete/objects/address";
import { MapsAPILoader } from '@agm/core';
declare var google;
@Component({
  selector: 'app-adress-search',
  templateUrl: './adress-search.component.html',
  styleUrls: ['./adress-search.component.css']
})
export class AdressSearchComponent implements OnInit {

 @ViewChild('places') places: GooglePlaceDirective;
lat:number;
lon:number;
zoom = 5;
 markers = [];
 filteredMarkers = [];
 private isValidAddress: boolean = false;
  private isAdressEntered: boolean = false;
  private formattedAddress:string="";
  private formattedShowAddress:string="";
  constructor(
    public activeModal: NgbActiveModal,
      private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit() {
  }

  getLocations(): Array<{ latitude: number, longitude: number }> {
     return [
       { 'latitude': 35.869650, 'longitude': -78.854780 }

     ];
   }



  public handleAddressChange(address: Address) {
    console.log(address.geometry.location.lng());
          console.log(address.geometry.location.lat());
          console.log(address.geometry.location.toJSON());
          console.log(address.geometry.viewport.getNorthEast());
this.lat=address.geometry.location.lat();
this.lon=address.geometry.location.lng();
this.formattedAddress=address.formatted_address;
console.log(address.formatted_address);
  }
onSearch()
{
  this.isAdressEntered=true;

  this.markers = this.getLocations();

this.mapsAPILoader.load().then(() => {
  const center = new google.maps.LatLng(this.lat, this.lon);
  this.filteredMarkers = this.markers.filter(m => {
    const markerLoc = new google.maps.LatLng(m.latitude, m.longitude);
    const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000;
    console.log(distanceInKm);
    if (distanceInKm < 16.0934){
    this.isValidAddress=true;
        localStorage.setItem("addressSearched","true");

      this.activeModal.close('Search click');
      this.formattedShowAddress=this.formattedAddress;
      return m;
    }
    else{
        this.isValidAddress=false;
        
    }
  });
});
}


}
