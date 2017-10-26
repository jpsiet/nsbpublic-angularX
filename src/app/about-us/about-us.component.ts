import { Component, OnInit } from '@angular/core';
import {LoggingService} from './../logging.service';
import {EventService} from './../event.service';
import {AppService} from './../app.service';


import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
	name :String = "default";

  constructor(private appService:AppService,

    private http: Http, private loggingService:LoggingService,private eventService:EventService) { }

  ngOnInit() {
    
        
   
  	 
  }
}


