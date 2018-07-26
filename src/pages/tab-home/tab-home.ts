import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Device } from '@ionic-native/device';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ChartPage } from '../chart/chart';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetail: any;
  loginStatus: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public device: Device,
    public alertCtrl: AlertController,
    public platform: Platform,
    public camera: Camera,
    public barcodeScanner: BarcodeScanner) {
    // ตรวจเช็คว่ามีตัวแปร userData อยู่ใน local storage หรือไม่
    let data = localStorage.getItem('userData');
    if (data == null) {
      this.userDetail = "ผู้เยี่ยมชม";
      this.loginStatus = false;
    } else {
      this.userDetail = data;
      this.loginStatus = true;
    }

    // คำสั่งเช็คว่าเป็น device จริงเท่านั้น
    if(!this.platform.is('core')){
      // แสดงข้อมูลเครื่อง
      let alert = this.alertCtrl.create({
        title: "ข้อมูลเครื่องนี้",
        subTitle: this.device.model + "\n" + this.device.platform + "\n" + this.device.version,
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  showLogin() {
    this.app.getRootNav().push(LoginPage);
  }

  logout() {
    localStorage.removeItem('userData');
    this.navCtrl.setRoot(TabsPage);
  }

  showRegister() {
    this.app.getRootNav().push(RegisterPage);
  }

  takeCamera(){
    if(!this.platform.is('core')){
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        
        this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        // Handle error
        });
      }
  }


  Scanbarcode()
  {
    if(!this.platform.is('core')){
        this.barcodeScanner.scan().then(barcodeData => {
          console.log('Barcode data', barcodeData);
          alert(JSON.stringify(barcodeData));
        }).catch(err => {
            console.log('Error', err);
        });
    }
  }

  showChart(){
    this.app.getRootNav().push(ChartPage);
  }

}
