import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LineChartPage } from '../line-chart/line-chart';
import { AddValuePage } from '../add-value/add-value';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  openLineChartPage() {
    this.navCtrl.push(LineChartPage);
  }


}
