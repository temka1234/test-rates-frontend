import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesChartComponent } from './rates-chart.component';

describe('RatesChartComponent', () => {
  let component: RatesChartComponent;
  let fixture: ComponentFixture<RatesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
