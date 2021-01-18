import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './questions-home.component.html',
  styleUrls: ['./questions-home.component.scss']
})
export class QuestionsHomeComponent implements OnInit {

  radioSelected:string;
  radioSelectedString:string;
  radioSel:any = '';

 // answers: string[];
  //selectedAnswer: string;

  questionsList

  //selectedAnswers: string[]

  //options: any = [];
  //option: any = [];

  //onlinetestForm = 

  constructor(private testService : TestService, private route: Router) { }

  ngOnInit(): void {
    //this.questions = this.testService.loadQuestions();
    this.testService.getJSON().subscribe(data => {
      console.log("questions = ", data);
      this.questionsList = data;
      //loadQuestions(data))
    })
  }

  // selectAnswer(ans: string) {
  //   this.selectedAnswer = ans; 
  // }

  //https://www.freakyjolly.com/how-to-show-radio-input-listing-in-angular-6/#.YAHjKugzZPY

  getSelecteditem(queindex, optionindex){
    console.log("selected index is = ", queindex, "-", optionindex);
    //console.log(this.questionsList[queindex].options);
    this.radioSelected = this.questionsList[queindex].options[optionindex].optid;
    console.log("radioSelected = ", this.radioSelected);
   
    //todo - check undefined for radiosel
    this.radioSel = this.questionsList[queindex].options.find(Item => {
      //console.log("Item =", Item)
      //console.log("Item radioSelected=", this.radioSelected)
      return Item.optid === this.radioSelected
    });

    console.log("radioSel = ", this.radioSel);
    this.radioSelectedString = JSON.stringify(this.radioSel);
    
    console.log("radioSelectedString = ", this.radioSelectedString);
  }

  onItemChange(opItem, queindex, optionindex){
    console.log("onItemChange called with opItem = ", opItem);
    this.getSelecteditem(queindex, optionindex);
  }

  submitTest(data){
    //calculate test result & route + display in result component
    console.log('Data entered in online test form : ', data);
   // let dataJson = JSON.stringify(data)

   let correctCount = 0;

   // console.log('questionsList size =  ', this.questionsList.length)
    let totalQueCount = this.questionsList.length;
    for (let queIdx=0; queIdx < totalQueCount; queIdx++){
      let ansId = ""+(queIdx+1) + "a";
      console.log('Data entered in online test form : ', data[ansId] ) ;//data[])

      if(data[ansId] == this.questionsList[queIdx].answerKey){
        correctCount += 1;
      }
      console.log('correctCount= : ', correctCount);
      
    }
   // console.log('Data entered in online test form : ', JSON.stringify(data))
     this.route.navigate(['/results'], { queryParams: {correctCount, totalQueCount}})

   
  }

    userRadioSelected : ""

}
