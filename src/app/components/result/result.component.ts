import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  correctCount = 0;
  totalQueCount = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //this.name = params['name'];
      console.log("params = ", params);
      this.correctCount = params.correctCount || 0;
      this.totalQueCount = params.totalQueCount || 0;
    });

   // const firstParam: string = this.route.snapshot.queryParamMap.get('correctCount');
   // console.log(firstParam);
    
  }

  tryAgain(){
    this.router.navigate(['/userhome']);
  }

  reviewAnswers(){
    this.router.navigate(['/reviewAnswers'], { queryParams : { questionList : []}});
  }

}
