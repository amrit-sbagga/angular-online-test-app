import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.scss']
})
export class ReviewAnswersComponent implements OnInit {

  questionsList
  constructor(private testService : TestService, private route: Router) { }

  ngOnInit(): void {

    this.testService.getJSON().subscribe(data => {
      console.log("questions = ", data);
      this.questionsList = data;
      //loadQuestions(data))
    })
  }

  goToHome(){
    this.route.navigate(['/userHome'])
  }

  goBack(){
    this.route.navigate(['/results'])
  }

}
