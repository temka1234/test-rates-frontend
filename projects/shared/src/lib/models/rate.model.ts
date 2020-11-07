import { Type, Transform } from 'class-transformer';
import * as moment from 'moment';
import { Moment } from 'moment';

import { Currency } from './currency.model';

export class Rate {
  id: number;

  @Transform(value => moment(value, 'YYYY-MM-DD'), { toClassOnly: true })
  date: Moment;

  @Type(() => Currency)
  fromCurrency: Currency;

  @Type(() => Currency)
  toCurrency: Currency;

  value: number;
}