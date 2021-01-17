import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsHomeComponent } from './components/questions-home/questions-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"questionshome",
    component: QuestionsHomeComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"userhome",
    component: UserHomeComponent
  },
  {
    path:"results",
    component: ResultComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
