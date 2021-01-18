import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private route : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  enterExam(subject){
    console.log("subject = ", subject);

    if(subject !== "ANGULAR"){
      this.toastr.info('Test coming soon!!, meanwhile you can try online test on Angular. Good Luck!', '', {
        timeOut: 4000
      });
      return;
    }
    
    this.route.navigate(['/questionshome']);
  }

}
