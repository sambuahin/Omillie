import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tributes } from './tributes';

describe('Tributes', () => {
  let component: Tributes;
  let fixture: ComponentFixture<Tributes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tributes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tributes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
