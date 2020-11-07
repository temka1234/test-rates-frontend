import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';

import { DataService } from '../../services';
import * as fromRoot from '../reducers';
import * as fromRatesActions from '../actions/rates.actions';
 
@Injectable()
export class RatesEffects { 
  loadRates$ = createEffect(() => this.actions$.pipe(
    ofType(fromRatesActions.loadRates),
    switchMap(() => this.store.select(fromRoot.selectRatesFilter)),
    switchMap(({ codes, dateFrom, dateTo}) => this.dataService.getRates(codes, dateFrom, dateTo).pipe(
      map((rates) => fromRatesActions.loadRatesSuccess({ rates }))
    ))
  ));
 
  constructor(
    private store: Store,
    private actions$: Actions,
    private dataService: DataService
  ) {}
}