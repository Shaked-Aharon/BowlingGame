import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BonusType, IPlayerScoreBox } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BowlingService {

  playerName$ = new BehaviorSubject<string>(localStorage.getItem('playerName') || '');
  playerScore$ = new BehaviorSubject<IPlayerScoreBox[]>(new Array<IPlayerScoreBox>(10).fill({ isFinished: false, isSpare: false, isStrike: false }));
  bonusType = BonusType.REGULAR;
  constructor(
    private router: Router
  ) { }

  startGame(name: string): void {
    this.playerName$.next(name);
    localStorage.setItem('playerName', name);
    this.router.navigate(['/play']);
  }

  throw(throwScore: number) {
    const scoreBoxIndex = this.playerScore$.value.findIndex(sB => !sB.isFinished);
    console.log(scoreBoxIndex);
    // const scoreTillNow = this.playerScore$.value.map(sB => sB.firstShot + sB.secondShot +)
    if (scoreBoxIndex === -1) { return; }
    let scoreBox = { ...this.playerScore$.value[scoreBoxIndex] };
    const totalPinInTurn = (scoreBox.firstShot || throwScore) + (scoreBox.secondShot || 0);
    const newPlayerScore = [...this.playerScore$.value];
    scoreBox = this.addThrowToBox(scoreBox, throwScore, scoreBoxIndex === 9 && totalPinInTurn === 10);
    newPlayerScore[scoreBoxIndex] = scoreBox;
    this.playerScore$.next(newPlayerScore);
    switch (this.bonusType) {
      case BonusType.STRIKE:
        break;
      case BonusType.SPARE:
        break;
      default:
        break;
    }
    this.bonusType = scoreBox.firstShot === 10 ? BonusType.STRIKE : (totalPinInTurn === 10 ? BonusType.SPARE : BonusType.REGULAR);
  }

  addThrowToBox(scoreBox: IPlayerScoreBox, throwScore: number, hasPermisionForThirdShot: boolean): IPlayerScoreBox {
    console.log(hasPermisionForThirdShot);
    if (!scoreBox.firstShot) { scoreBox.firstShot = throwScore; scoreBox.isFinished = throwScore === 10; }
    else if (!scoreBox.secondShot) { scoreBox.secondShot = throwScore; scoreBox.isFinished = !hasPermisionForThirdShot; }
    else if (!scoreBox.thirdShot && hasPermisionForThirdShot) { scoreBox.thirdShot = throwScore; scoreBox.isFinished = true; }
    if (scoreBox.firstShot === 10) { scoreBox.isStrike = true; }
    if ((scoreBox.firstShot || 0) + (scoreBox.secondShot || 0) === 10) { scoreBox.isSpare = true; }
    return scoreBox;
  }
}
