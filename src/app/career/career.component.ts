import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

	id:String = "default";

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(

			  (params:Params)  => {
                
               this.id = params['id'];

			  }

  	)
  }

}
