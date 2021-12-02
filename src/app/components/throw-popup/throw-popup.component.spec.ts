import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowPopupComponent } from './throw-popup.component';

describe('ThrowPopupComponent', () => {
  let component: ThrowPopupComponent;
  let fixture: ComponentFixture<ThrowPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrowPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
