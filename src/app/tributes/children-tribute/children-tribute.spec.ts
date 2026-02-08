import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenTribute } from './children-tribute';

describe('ChildrenTribute', () => {
  let component: ChildrenTribute;
  let fixture: ComponentFixture<ChildrenTribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenTribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenTribute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
