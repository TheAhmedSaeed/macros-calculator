import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStatsComponent } from './body-stats.component';

describe('BodyStatsComponent', () => {
  let component: BodyStatsComponent;
  let fixture: ComponentFixture<BodyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
