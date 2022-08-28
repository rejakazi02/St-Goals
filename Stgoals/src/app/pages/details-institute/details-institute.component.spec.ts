import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInstituteComponent } from './details-institute.component';

describe('DetailsInstituteComponent', () => {
  let component: DetailsInstituteComponent;
  let fixture: ComponentFixture<DetailsInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
