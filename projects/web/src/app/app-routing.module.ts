import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatesComponent } from './rates';
import { RatesTableComponent } from './rates-table';
import { RatesChartComponent } from './rates-chart';

const routes: Routes = [
  {
    path: '', component: RatesComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: RatesTableComponent },
      { path: 'chart', component: RatesChartComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
