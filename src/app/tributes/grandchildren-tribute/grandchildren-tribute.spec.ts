import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildrenTribute } from './grandchildren-tribute';

describe('GrandchildrenTribute', () => {
  let component: GrandchildrenTribute;
  let fixture: ComponentFixture<GrandchildrenTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandchildrenTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandchildrenTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
