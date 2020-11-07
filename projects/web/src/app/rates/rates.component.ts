import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadRates } from '@shared/store/actions';
import * as fromRoot from '@shared/store/reducers';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.less']
})
export class RatesComponent implements OnInit {
  loading$ = this.store.select(fromRoot.selectRatesLoading);

  constructor(private store: Store) {
    this.store.dispatch(loadRates());
  }

  ngOnInit(): void {
  }

}
