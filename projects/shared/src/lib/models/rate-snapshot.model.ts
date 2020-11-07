import { Type, Transform, plainToClass } from 'class-transformer';
import { Moment } from 'moment';
import * as moment from 'moment';

import { Currency } from './currency.model';
import { Rate } from './rate.model';

export class RateSnapshot {
  @Type(() => Date)
  @Transform(value => moment(value), { toClassOnly: true })
  date: Moment;

  @Type(() => Rate)
  rates: Rate[];
}