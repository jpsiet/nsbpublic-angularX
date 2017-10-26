import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

	role = {
		 'teacher' :'teacher',
		 'principal':'principal',
		 'admin' : 'admin',
		 'student' :'student'
	}

  currentRole = '';
   checkLoginRoleAndValidity(cred:object){

     if(cred['name'] === cred['password']){

       this.currentRole = this.role[cred['name']];
     	return true;

     }
     return false;
   }

}