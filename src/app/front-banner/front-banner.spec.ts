import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBanner } from './front-banner';

describe('FrontBanner', () => {
  let component: FrontBanner;
  let fixture: ComponentFixture<FrontBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
