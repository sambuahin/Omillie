import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistersTribute } from './sisters-tribute';

describe('SistersTribute', () => {
  let component: SistersTribute;
  let fixture: ComponentFixture<SistersTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistersTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistersTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
