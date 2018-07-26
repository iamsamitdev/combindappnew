import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pushdetail',
  templateUrl: 'pushdetail.html',
})
export class PushdetailPage {

  getSID:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getSID = navParams.get('sid');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushdetailPage');
  }

}
