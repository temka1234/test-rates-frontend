import { Action, createReducer, on } from '@ngrx/store';
import { Moment } from 'moment';
import * as moment from 'moment';

import { Rate } from '../../models/rate.model';
import * as fromRatesActions from '../actions/rates.actions';

export interface State {
  dateFrom: Moment;
  dateTo: Moment;
  currenciesCodes: string[],
  rates: Rate[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  dateFrom: moment().subtract(30, 'days'),
  dateTo: moment(),
  currenciesCodes: ['USD', 'EUR'],
  rates: [],
  loaded: false,
  loading: false
};

const ratesReducer = createReducer(
  initialState,
  on(fromRatesActions.loadRates, state => ({ ...state, loading: true })),
  on(fromRatesActions.loadRatesSuccess, (state, { rates }) => ({ ...state, loading: false, loaded: true, rates })),
  on(fromRatesActions.loadRatesFailed, state => ({ ...state, loading: false })),
  on(fromRatesActions.applyFilter, (state, { dateFrom, dateTo }) => ({ ...state, loaded: false, dateFrom, dateTo }))
);

export function reducer(state: State | undefined, action: Action) {
  return ratesReducer(state, action);
}

export const selectDateFrom = (state: State) => state.dateFrom;
export const selectDateTo = (state: State) => state.dateTo;
export const selectLoading = (state: State) => state.loading;
export const selectLoaded = (state: State) => state.loaded;
export const selectRates = (state: State) => state.rates;
export const selectCodes = (state: State) => state.currenciesCodes;