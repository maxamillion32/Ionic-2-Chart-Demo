import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the LineChart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-line-chart',
  templateUrl: 'line-chart.html'
})
export class LineChartPage {

  lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [10, 68, 80, 32, 32, 19, 87], label: 'Series B'}
  ];

  lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineChartPage');
  }

}
