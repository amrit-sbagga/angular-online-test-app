import { Component, OnInit } from '@angular/core';

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

  //https://www.freakyjolly.com/how-to-show-radio-input-listing-in-angular-6/#.YAHjKugzZPY

  getSelecteditem(queindex, optionindex){
    console.log("selected index is = ", queindex, "-", optionindex);
    //console.log(this.questionsList[queindex].options);
    this.radioSelected = this.questionsList[queindex].options[optionindex].optid;
    console.log("radioSelected = ", this.radioSelected);
   
    //todo - check undefined for radiosel
    this.radioSel = this.questionsList[queindex].options.find(Item => {
      console.log("Item =", Item)
      console.log("Item radioSelected=", this.radioSelected)
      Item.optid === this.radioSelected
    });

    console.log("radioSel = ", this.radioSel);
    this.radioSelectedString = JSON.stringify(this.radioSel);
    
    console.log("radioSelectedString = ", this.radioSelectedString);
  }

  onItemChange(opItem, queindex, optionindex){
    console.log("onItemChange called with opItem = ", opItem);
    this.getSelecteditem(queindex, optionindex);
  }

  submitTest(){
    //calculate test result & route + display in result component
  }





}
