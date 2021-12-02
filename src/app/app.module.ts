import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginView } from './views/login/login.view';
import { BowlingView } from './views/bowling/bowling.view';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    LoginView,
    BowlingView,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
