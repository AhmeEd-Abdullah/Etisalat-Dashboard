import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralStatisticsComponent } from './general-statistics/general-statistics.component';
import { MyCasesComponent } from './my-cases/my-cases.component';

import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralStatisticsComponent,
    MyCasesComponent,
    ChartComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
