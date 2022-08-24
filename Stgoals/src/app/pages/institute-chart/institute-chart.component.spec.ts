import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteChartComponent } from './institute-chart.component';

describe('InstituteChartComponent', () => {
  let component: InstituteChartComponent;
  let fixture: ComponentFixture<InstituteChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
