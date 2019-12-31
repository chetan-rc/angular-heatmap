import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { HeatMapModule } from 'projects/angular-heatmap/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeatMapModule.forRoot({
      heatMapPointRadiusBlur : 25,
      heatMapPointRadius : 5,
      mouseMovementsInterval: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }