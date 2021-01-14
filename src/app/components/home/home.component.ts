import { Component, OnInit } from '@angular/core';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions
  constructor(private testService : TestService) { }

  ngOnInit(): void {
    this.questions = this.testService.loadQuestions();
  }

  submitTest(){
    //calculate test result & route + display in result component
  }





}
