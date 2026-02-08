import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingingBandTribute } from './singing-band-tribute';

describe('SingingBandTribute', () => {
  let component: SingingBandTribute;
  let fixture: ComponentFixture<SingingBandTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingingBandTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingingBandTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
