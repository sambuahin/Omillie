import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficiatingMinisters } from './officiating-ministers';

describe('OfficiatingMinisters', () => {
  let component: OfficiatingMinisters;
  let fixture: ComponentFixture<OfficiatingMinisters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficiatingMinisters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficiatingMinisters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
