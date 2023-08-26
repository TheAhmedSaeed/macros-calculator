import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyRatesComponent } from './energy-rates.component';

describe('EnergyRatesComponent', () => {
  let component: EnergyRatesComponent;
  let fixture: ComponentFixture<EnergyRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
