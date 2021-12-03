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
    if (scoreBoxIndex === -1) { return; }
    let scoreBox = { ...this.playerScore$.value[scoreBoxIndex] };
    const newPlayerScore = [...this.playerScore$.value];
    scoreBox = this.addThrowToBox(scoreBox, throwScore, scoreBoxIndex === 9);
    scoreBox = this.checkIfBoxFinished(scoreBox, scoreBoxIndex === 9);
    newPlayerScore[scoreBoxIndex] = scoreBox;
    this.calculateScore(newPlayerScore);
  }

  addThrowToBox(scoreBox: IPlayerScoreBox, throwScore: number, isLastBox: boolean): IPlayerScoreBox {
    if (!scoreBox.firstShot) { scoreBox.firstShot = throwScore; }
    else if (scoreBox.firstShot !== 10 && !scoreBox.secondShot) { scoreBox.secondShot = throwScore; }
    else if (isLastBox && !scoreBox.thirdShot && !!scoreBox.firstShot && !!scoreBox.secondShot) { scoreBox.thirdShot = throwScore; }
    if (scoreBox.firstShot === 10) { scoreBox.isStrike = true; }
    else if ((scoreBox.firstShot || 0) + (scoreBox.secondShot || 0) === 10) { scoreBox.isSpare = true; }
    return scoreBox;
  }

  checkIfBoxFinished(scoreBox: IPlayerScoreBox, isLastBox: boolean) {
    scoreBox.isFinished = ((scoreBox.firstShot || 0) === 10 && !isLastBox) || (scoreBox.firstShot! > -1) && (scoreBox.secondShot! > -1) && (isLastBox ? !!scoreBox.thirdShot : true);
    return scoreBox;
  }

  calculateScore(scores: IPlayerScoreBox[]) {
    let totalScore = 0;
    let bonusType = BonusType.REGULAR;
    for (let i = 0; i < scores.length; i++) {
      const box = scores[i];
      if (box.firstShot! > -1) {
        box.score = totalScore + box.firstShot! + (box.secondShot || 0);
        if (bonusType !== BonusType.REGULAR && i !== 0 && scores[i - 1].isFinished && (scores[i - 1].isSpare || scores[i - 1].isStrike)) {
          box.score += bonusType === BonusType.SPARE ? box.firstShot! : (box.firstShot || 0) + (box.secondShot || 0);
        }
        box.score += (box.thirdShot || 0);
        totalScore = box.score;

        bonusType = box.firstShot === 10 ? BonusType.STRIKE : (box.firstShot! + (box.secondShot || 0) === 10 ? BonusType.SPARE : BonusType.REGULAR);
      }
    }
    this.playerScore$.next(scores);
  }
}
