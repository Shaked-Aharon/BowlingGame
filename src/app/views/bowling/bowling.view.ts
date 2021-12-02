import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BowlingService } from 'src/app/services/bowling.service';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.view.html',
  styleUrls: ['./bowling.view.scss']
})
export class BowlingView implements OnInit {
  isThrowing = false;

  constructor(
    private router: Router,
    private bowlingService: BowlingService
  ) {
  }

  ngOnInit(): void {
    if (!this.bowlingService.playerName$.value) {
      this.router.navigate(['/']);
    }
  }

  throw() {
    this.isThrowing = true;
  }


}
