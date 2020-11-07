import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { reducers } from '@shared/store/reducers';
import { RatesEffects } from '@shared/store/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatesModule } from './rates';
import { RatesTableModule } from './rates-table';
import { RatesChartModule } from './rates-chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatesModule,
    RatesTableModule,
    RatesChartModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([RatesEffects])
  ],
  providers: [
    { provide: 'apiUrl', useValue: environment.api },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
