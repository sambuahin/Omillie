import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOfService } from './order-of-service';

describe('OrderOfService', () => {
  let component: OrderOfService;
  let fixture: ComponentFixture<OrderOfService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderOfService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOfService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
