import { Component, OnInit } from '@angular/core';
import { BowlingService } from 'src/app/services/bowling.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

  playerScore$ = this.bowlingService.playerScore$;

  constructor(
    private bowlingService: BowlingService
  ) { }

  ngOnInit(): void {
  }

}
