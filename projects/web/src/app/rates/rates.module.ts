import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RatesComponent } from './rates.component';

@NgModule({
  declarations: [
    RatesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveComponentModule,
    RouterModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class RatesModule { }
