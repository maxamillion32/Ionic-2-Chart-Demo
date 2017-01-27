import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AddValue page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-value',
  templateUrl: 'add-value.html'
})
export class AddValuePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddValuePage');
  }

  addNewItem(value, label){
    this.lineChartData[0].data.push( value );
    this.lineChartLabels.push( label );
  }

}
