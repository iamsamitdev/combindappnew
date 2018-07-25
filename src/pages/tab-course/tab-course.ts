import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { CoursedetailPage } from '../coursedetail/coursedetail';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

  // กำหนดตัวแปรไว้เก็บค่าจาก API (JSON)
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public app: App) {

  }

  ionViewDidLoad() {
    this.webapi.getData('feed_course.php').then((result) => {
      //console.log(result);
      this.responseData = result;
    });
  }

  courseDetail(id) {
    //alert(id);
    this.app.getRootNav().push(CoursedetailPage,{id:id});
  }

}
