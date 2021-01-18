import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  enterExam(subject){
    console.log("subject = ", subject);
    
    //this.route.navigate(['/questionshome']);
  }

}
