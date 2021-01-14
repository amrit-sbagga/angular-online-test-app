import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

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
    path:"home",
    component: HomeComponent
  },
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"userhome",
    component: UserHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
