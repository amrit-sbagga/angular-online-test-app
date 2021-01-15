import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log("questions = ", data);
      
    //   //loadQuestions(data))
    // })
   }

   getJSON() : Observable<any> {
    return this.http.get('../../assets/questions-angular.json')
   }


  // loadQuestions(){
  //   //read questions.json file and store in array
  //   return [];
  // }


}
