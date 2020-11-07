import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveComponentModule } from '@ngrx/component';

import { RatesChartComponent } from './rates-chart.component';

@NgModule({
  declarations: [
    RatesChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveComponentModule
  ]
})
export class RatesChartModule { }
