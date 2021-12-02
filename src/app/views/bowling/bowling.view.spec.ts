import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingView } from './bowling.view';

describe('BowlingView', () => {
  let component: BowlingView;
  let fixture: ComponentFixture<BowlingView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
