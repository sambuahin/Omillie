import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCWomensTribute } from './dc-womens-tribute';

describe('DCWomensTribute', () => {
  let component: DCWomensTribute;
  let fixture: ComponentFixture<DCWomensTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCWomensTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DCWomensTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
