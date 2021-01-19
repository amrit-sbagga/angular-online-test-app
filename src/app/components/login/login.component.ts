import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private testService : TestService) { }

  ngOnInit(): void {
  }

  formValue = {
    username: 'admin', //hardcoded for testing
    password: 'admin', //hardcoded for testing
  }

  userForm = new FormGroup({
    username : new FormControl(this.formValue.username),
    password : new FormControl(this.formValue.password)
  })

  signin(event){
    let formValues = this.userForm.value;
    //console.log('Login Values = ', );
    
    if(formValues.username === "admin" && formValues.password){
      this.navigateToUserHome();
    }else{
      return;
    }
  }

  navigateToUserHome(){
    this.route.navigate(['/userhome'])
    //localStorage.setItem('loggedIn', "true");
    this.testService.changeLoggedInStatus(true)
  }

}
