import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestionsHomeComponent } from './components/questions-home/questions-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultComponent } from './components/result/result.component';
import { TimerComponent } from './components/timer/timer.component';

import { TestService } from './services/test.service';
import { UserHomeComponent } from './components/user-home/user-home.component';

import { HttpClientModule } from '@angular/common/http';
import { ReviewAnswersComponent } from './components/review-answers/review-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionsHomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ResultComponent,
    TimerComponent,
    UserHomeComponent,
    ReviewAnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
