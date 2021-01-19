import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  constructor(private testService : TestService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.testService.loggedInStatus.subscribe(data => {
      console.log("In header: subscribe data received = ", data);
      this.loggedIn = data;
    })
    //localStorage.getItem("loggedIn") === "true"? true : false;
    //console.log("In header: loggedIn = ", this.loggedIn);
    
  }

  goToLogin(){
    console.log("In header: logout clicked..!!");
    this.testService.changeLoggedInStatus(false);
    this.router.navigate(["/login"])
  }

}
