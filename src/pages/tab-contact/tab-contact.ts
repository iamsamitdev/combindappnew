import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare let google;

@IonicPage()
@Component({
  selector: 'page-tab-contact',
  templateUrl: 'tab-contact.html',
})
export class TabContactPage {
  @ViewChild('map') mapElement: ElementRef;
  map:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }
  
  loadMap()
  {
    let lat = 13.7945453;
    let lng = 100.6006523;
    let latLng = new google.maps.LatLng(lat,lng);
    let mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // Marker
    new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: "https://cdn2.iconfinder.com/data/icons/snipicons/5000/home-128.png"
    });

  }

}
