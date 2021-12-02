import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-throw-popup',
  templateUrl: './throw-popup.component.html',
  styleUrls: ['./throw-popup.component.scss']
})
export class ThrowPopupComponent {
  pinsInput = new FormControl(0, [Validators.required])
  @Output() throwEnd: EventEmitter<void> = new EventEmitter();

  constructor() { }

  throw(){
    this.close();
  }

  close(){
    this.throwEnd.emit();
  }
}
