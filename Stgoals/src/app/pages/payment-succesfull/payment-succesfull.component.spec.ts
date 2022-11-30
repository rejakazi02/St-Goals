import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccesfullComponent } from './payment-succesfull.component';

describe('PaymentSuccesfullComponent', () => {
  let component: PaymentSuccesfullComponent;
  let fixture: ComponentFixture<PaymentSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSuccesfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
