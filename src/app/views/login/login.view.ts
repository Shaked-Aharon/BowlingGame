import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BowlingService } from 'src/app/services/bowling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView {

  playerNameInput = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]);
  constructor(
    private bowlingService: BowlingService
  ) { }

  startGame(): void {
    this.bowlingService.startGame(this.playerNameInput.value);
  }

}
