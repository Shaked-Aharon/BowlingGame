import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IPlayerScoreBox } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BowlingService {

  playerName$ = new BehaviorSubject<string>(localStorage.getItem('playerName') || '');
  playerScore$ = new BehaviorSubject<IPlayerScoreBox[]>([]);
  constructor(
    private router: Router
  ) { }

  startGame(name: string): void {
    this.playerName$.next(name);
    localStorage.setItem('playerName', name);
    this.router.navigate(['/play']);
  }

}
