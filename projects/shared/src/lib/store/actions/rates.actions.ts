import { createAction, props } from '@ngrx/store';
import { Moment } from 'moment';

import { Rate } from '../../models';

export const loadRates = createAction('[Rates] LoadRates');
export const loadRatesSuccess = createAction(
  '[Rates] loadRatesSuccess',
  props<{ rates: Rate[] }>()
);
export const loadRatesFailed = createAction('[Rates] LoadRatesFailed');
export const applyFilter = createAction(
  '[Rates] ApplyFilter',
  props<{ codes: string[], dateFrom: Moment, dateTo: Moment }>()
);