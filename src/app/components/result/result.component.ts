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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      //this.name = params['name'];
      console.log("params = ", params);
      this.correctCount = params.correctCount;
      this.totalQueCount = params.totalQueCount;
    });

   // const firstParam: string = this.route.snapshot.queryParamMap.get('correctCount');
   // console.log(firstParam);
    
  }

}
