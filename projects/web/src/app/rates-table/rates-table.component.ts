import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as fromRoot from '@shared/store/reducers';

@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatesTableComponent implements OnInit {
  timeseries$ = this.store.select(fromRoot.selectRatesTimeseries);
  stats$ = this.store.select(fromRoot.selectRatesStats); 
  codes$ = this.store.select(fromRoot.selectRatesCodes);

  columns$ = this.codes$.pipe(map((codes) => ['date', ...codes]));

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
