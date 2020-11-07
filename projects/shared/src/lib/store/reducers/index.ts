import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as _ from 'lodash';

import { RateSnapshot } from '../../models/rate-snapshot.model';
import * as fromRates from './rates.reducer';
 
export interface State {
  rates: fromRates.State;
}

export const reducers: ActionReducerMap<State> = {
  rates: fromRates.reducer
};

export const selectRates = createFeatureSelector<State, fromRates.State>('rates');

export const selectRatesLoaded = createSelector(selectRates, fromRates.selectLoaded);
export const selectRatesLoading = createSelector(selectRates, fromRates.selectLoading);
export const selectRatesRates = createSelector(selectRates, fromRates.selectRates);
export const selectRatesDateFrom = createSelector(selectRates, fromRates.selectDateFrom);
export const selectRatesDateTo = createSelector(selectRates, fromRates.selectDateTo);
export const selectRatesCodes = createSelector(selectRates, fromRates.selectCodes);

export const selectRatesFilter = createSelector(
  selectRatesCodes, selectRatesDateFrom, selectRatesDateTo,
  (codes, dateFrom, dateTo) => ({ codes, dateFrom, dateTo })
);

export const selectRatesSnapshots = createSelector(
  selectRatesRates,
  (rates) =>  _(rates)
      .groupBy('date')
      .mapValues((rates, date) => ({ date: rates[0].date, rates }))
      .values()
      .value() as RateSnapshot[]
);

export const selectRatesSortedSnapshots = createSelector(
  selectRatesSnapshots,
  (snapshots) => [...snapshots].sort((s1, s2) => s2.date.unix() - s1.date.unix())
);

export const selectRatesTimeseries = createSelector(
  selectRatesSortedSnapshots,
  (snapshots) => snapshots.map(snapshot => Object.assign({ date: snapshot.date },
    snapshot.rates.reduce((res, rate) => (res[rate.toCurrency.letterCode] = rate.value, res), { }))
  )
);

export const selectGrouppedRates = createSelector(
  selectRatesSortedSnapshots,
  (snapshots) => snapshots.reduce((res, snapshot) => {
    snapshot.rates.forEach((rate) => {
      const code = rate.toCurrency.letterCode;
      if (!(code in res)) {
        res[code] = [];
      }
      res[code].push({ date: snapshot.date, value: rate.value });
    })
    return res;
  }, { })
);

export const selectRatesChartData = createSelector(
  selectGrouppedRates, selectRatesCodes,
  (grouppedRates, codes) => {
    return codes.map(code => ({
      name: code,
      series: grouppedRates[code].map((rateByCode) => ({ name: rateByCode.date.format('MMM DD, YYYY'), value: rateByCode.value }))
    }));
  }
);

export const selectRatesStats = createSelector(
  selectGrouppedRates,
  (grouppedRates) => {
    const stats = { };
    Object.keys(grouppedRates).forEach((key) => {
      stats[key] = { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER };
      grouppedRates[key].forEach((grouppedRate) => {
        stats[key].min = Math.min(stats[key].min, grouppedRate.value);
        stats[key].max = Math.max(stats[key].max, grouppedRate.value);
      });
    });
    return stats;
  }
)