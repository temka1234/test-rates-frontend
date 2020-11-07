import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RatesTableComponent } from './rates-table.component';

@NgModule({
  declarations: [RatesTableComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    ReactiveComponentModule
  ]
})
export class RatesTableModule { }
