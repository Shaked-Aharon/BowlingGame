import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginView } from './views/login/login.view';
import { BowlingView } from './views/bowling/bowling.view';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ThrowPopupComponent } from './components/throw-popup/throw-popup.component';

@NgModule({
  declarations: [
    LoginView,
    BowlingView,
    AppComponent,
    ScoreBoardComponent,
    ThrowPopupComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
