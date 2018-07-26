import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSettingPage } from '../pages/side-setting/side-setting';

// Push notification with firebase
import { FCM } from '@ionic-native/fcm';
import { PushdetailPage } from '../pages/pushdetail/pushdetail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fcm: FCM,
    public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ตารางอบรม', component: SideSchedulePage },
      { title: 'ผลงานของเรา', component: SidePortfolioPage },
      { title: 'ช่องทางชำระเงิน', component: SidePaymentPage },
      { title: 'ตั้งค่าระบบ', component: SideSettingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Pushnotification
      if(!this.platform.is('core')){

        // ลงทะเบียนเครื่องเพื่อรับ Token
        this.fcm.subscribeToTopic('all');
        this.fcm.getToken().then(token=>{
          let alert = this.alertCtrl.create({
            title:"Your token",
            //message: token,
            inputs: [
              {
                name: 'token',
                value: token
              }
            ],
            buttons: ['Dismiss']
          });
          alert.present();
        });

        // รับข้อความแจ้งเตือน
        this.fcm.onNotification().subscribe(data => {
          if(data.wasTapped){
            //alert("Received in background");
            this.nav.push(PushdetailPage,{sid:data.pid});
          } else {
            alert("Received in foreground");
          };
        });

      } // if(!this.platform.is('core'))

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
