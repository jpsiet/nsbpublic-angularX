import {CanActivate} from '@angular/router';

export class AuthGuardService implements CanActivate{

	canActivate(){

		console.log('checking Auth Guard  validations');
		return true;
	}


}