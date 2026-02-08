import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HusbandTribute } from './husband-tribute';

describe('HusbandTribute', () => {
  let component: HusbandTribute;
  let fixture: ComponentFixture<HusbandTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HusbandTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HusbandTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
