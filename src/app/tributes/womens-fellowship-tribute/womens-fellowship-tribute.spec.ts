import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensFellowshipTribute } from './womens-fellowship-tribute';

describe('WomensFellowshipTribute', () => {
  let component: WomensFellowshipTribute;
  let fixture: ComponentFixture<WomensFellowshipTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomensFellowshipTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomensFellowshipTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
