import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
 selector:'thanks-comp',
 styleUrls:['./thanks.scss'],
 templateUrl:'./thanks.html'

})
export class ThanksComponent implements OnInit {

type:String ="default";
query:String = 'query';
 constructor(private acitvatedRoute:ActivatedRoute, private route:Router){}

	 ngOnInit() {

  	 this.acitvatedRoute.params.subscribe(
			     (params:Params) => {
                    this.type = params['id'];
			     }
  		)


  	 this.acitvatedRoute.queryParams.subscribe(
			     (params:Params) => {
                    this.query = params['name'];
			     }
  		)

  }

}