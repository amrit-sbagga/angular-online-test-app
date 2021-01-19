import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  constructor(private testService : TestService) {
    
   }

  ngOnInit(): void {
    this.testService.loggedInStatus.subscribe(data => {
      console.log("In header: subscribe data received = ", data);
      this.loggedIn = data;
    })
    //localStorage.getItem("loggedIn") === "true"? true : false;
    //console.log("In header: loggedIn = ", this.loggedIn);
    
  }

}
