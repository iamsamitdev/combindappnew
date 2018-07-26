import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Web API
import { HttpModule } from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

// Page
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabChatPage } from '../pages/tab-chat/tab-chat';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { Device } from '@ionic-native/device';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Push notification with firebase
import { FCM } from '@ionic-native/fcm';
import { PushdetailPage } from '../pages/pushdetail/pushdetail';
import { ChartPage } from '../pages/chart/chart';

@NgModule({
  declarations: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabChatPage,
    TabsPage,
    CoursedetailPage,
    LoginPage,
    RegisterPage,
    PushdetailPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SidePaymentPage,
    SideSettingPage,
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabChatPage,
    TabsPage,
    CoursedetailPage,
    LoginPage,
    RegisterPage,
    PushdetailPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    Device,
    Camera,
    BarcodeScanner,
    FCM
  ]
})
export class AppModule {}
