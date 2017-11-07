import {Headers,Http} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

  import { environment } from '../environments/environment';

@Injectable()
export class AppService{

	private headers = new Headers({'Content-Type':'application/json'});

	private  path = "";
    // Node JS Version
    
     //  Spring Version
     // baseUrl = "http://localhost:8080/nsbpublic/"; 

	constructor(private http:Http){};
  
   setEnvoirment(name){
   	this.path=name;
   }
	
  
   // java version http://localhost:8080/nsbpublic/api/student/
     getStudentList(){
       debugger;
    	return this.http.get(environment.apiUrl+ 'api/students');
    }

}