import {Headers,Http} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService{

	private headers = new Headers({'Content-Type':'application/json'});
	private  path = "";


	constructor(private http:Http){};
  
   setEnvoirment(name){
   	this.path=name;
   }
	getName(): Promise<any>{
		return this.http.get(this.path)
		       .toPromise()
		       .then(this.extractData)
	}

	private extractData(res:Response |any){

		let body = JSON.parse(res._body);
		return body || {}
	}
    getTeacherList():Promise<any>{
    	return this.http.get(this.path+'/api/teachers').toPromise()
    	.then( (res:Response |any) => {

    		let body = JSON.parse(res._body);
		    return body || {}

    	})
    }


     getStudentList():Promise<any>{
    	return this.http.get('http://localhost:8080/nsbpublic/api/student/').toPromise()
    	.then( (res:Response |any) => {

    		let body = JSON.parse(res._body);
		    return body || {}

    	})
    }

}