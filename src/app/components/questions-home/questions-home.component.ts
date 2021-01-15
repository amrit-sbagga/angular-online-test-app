import { Component, OnInit } from '@angular/core';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.scss']
})
export class QuestionsHomeComponent implements OnInit {

  questionsList
  constructor(private testService : TestService) { }

  ngOnInit(): void {
    //this.questions = this.testService.loadQuestions();
    this.testService.getJSON().subscribe(data => {
      console.log("questions = ", data);
      this.questionsList = data;
      //loadQuestions(data))
    })
  }

  submitTest(){
    //calculate test result & route + display in result component
  }





}
