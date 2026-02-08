import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSChurchTribute } from './ems-church-tribute';

describe('EMSChurchTribute', () => {
  let component: EMSChurchTribute;
  let fixture: ComponentFixture<EMSChurchTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EMSChurchTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMSChurchTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
