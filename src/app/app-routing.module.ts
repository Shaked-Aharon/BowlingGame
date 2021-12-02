import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BowlingView } from './views/bowling/bowling.view';
import { LoginView } from './views/login/login.view';

const routes: Routes = [
  {path: 'play', component: BowlingView},
  {path: '', pathMatch: 'full', component: LoginView},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
