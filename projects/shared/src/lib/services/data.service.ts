import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass, classToPlain } from 'class-transformer';
import { Moment } from 'moment';

import { Rate } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(@Inject('apiUrl') private apiUrl: string,
              private http: HttpClient) { }

  getRates(codes: string[], dateFrom: Moment, dateTo: Moment): Observable<Rate[]> {
    let params = new HttpParams()
      .append('dateFrom', dateFrom.format('YYYY-MM-DD'))
      .append('dateTo', dateTo.format('YYYY-MM-DD'))

    for (const code of codes) {
      params = params.append('toCurrencyCodes', code);
    }

    return this.http.get(`${this.apiUrl}/rates/`, { params }).pipe(
      map((res: any) => plainToClass(Rate, res as Object[]) )
    );
  }
}