import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFinishPopupComponent } from './game-finish-popup.component';

describe('GameFinishPopupComponent', () => {
  let component: GameFinishPopupComponent;
  let fixture: ComponentFixture<GameFinishPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFinishPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFinishPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
