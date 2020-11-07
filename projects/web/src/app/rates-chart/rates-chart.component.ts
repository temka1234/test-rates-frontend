import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@shared/store/reducers';

@Component({
  selector: 'app-rates-chart',
  templateUrl: './rates-chart.component.html',
  styleUrls: ['./rates-chart.component.less']
})
export class RatesChartComponent implements OnInit {
  chartData$ = this.store.select(fromRoot.selectRatesChartData);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
