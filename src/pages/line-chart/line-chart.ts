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

  // {data: [1,2,3], label: 'Series A'}
  lineChartData:Array<any> = [];

  // labels
  lineChartLabels:Array<any> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineChartPage');
  }

}
