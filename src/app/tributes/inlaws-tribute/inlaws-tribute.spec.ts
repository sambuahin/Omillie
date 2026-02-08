import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlawsTribute } from './inlaws-tribute';

describe('InlawsTribute', () => {
  let component: InlawsTribute;
  let fixture: ComponentFixture<InlawsTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlawsTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlawsTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
