import { Component ,OnInit} from '@angular/core';
import {EventService} from './event.service';
import {AppService} from './app.service';
import { Location }   from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

	constructor(private eventService:EventService, private appService:AppService, 
		private location:Location){}
  title = 'app';

  ngOnInit(){
  	 if(location.host === 'localhost:4200'){
      this.appService.setEnvoirment('http://localhost:3000')
     }else{
     	 this.appService.setEnvoirment('http://ec2-18-221-43-252.us-east-2.compute.amazonaws.com:9000')
     }
  	  this.eventService.aboutUsClicked.subscribe(item => this.title = item);
  }
}
