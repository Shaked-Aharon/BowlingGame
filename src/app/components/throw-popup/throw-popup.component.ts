import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BowlingService } from 'src/app/services/bowling.service';

@Component({
  selector: 'app-throw-popup',
  templateUrl: './throw-popup.component.html',
  styleUrls: ['./throw-popup.component.scss']
})
export class ThrowPopupComponent implements OnInit {
  pinsInput = new FormControl(5, [])
  @Output() throwEnd: EventEmitter<void> = new EventEmitter();

  constructor(
    private bowlingService: BowlingService
  ) { }

  ngOnInit(){
    const maxPotenialThrowScore = 10 - (this.bowlingService.playerScore$.value.find(sB => !sB.isFinished)?.firstShot || 0);
    this.pinsInput.setValidators([Validators.required, Validators.min(0), Validators.max(maxPotenialThrowScore)])
  }
  throw(){
    this.bowlingService.throw(this.pinsInput.value)
    this.close();
  }

  close(){
    this.throwEnd.emit();
  }
}
