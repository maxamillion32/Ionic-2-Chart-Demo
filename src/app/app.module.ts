import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LineChartPage } from '../pages/line-chart/line-chart';
import { AddValuePage } from '../pages/add-value/add-value';

// 1. Run: npm install ng2-charts --save
// 2. Run: npm install chart.js --save
// 3. Add to HTML: 
// <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.3/Chart.bundle.min.js"></script>
//
// Import Chart Module
import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LineChartPage,
    AddValuePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    // Import ChartsModule
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LineChartPage,
    AddValuePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
