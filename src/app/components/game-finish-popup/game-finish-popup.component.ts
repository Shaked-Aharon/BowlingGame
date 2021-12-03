import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BowlingService } from 'src/app/services/bowling.service';

@Component({
  selector: 'app-game-finish-popup',
  templateUrl: './game-finish-popup.component.html',
  styleUrls: ['./game-finish-popup.component.scss']
})
export class GameFinishPopupComponent implements OnInit {

  @Output() restart: EventEmitter<void> = new EventEmitter();
  totalScore = this.bowlingService.playerScore$.value[9].score;
  constructor(
    private bowlingService: BowlingService
  ) { }

  ngOnInit(): void {
  }

}
