import {Component} from '@angular/core';
import {AuthService} from './../auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
	selector:'app-login-component',
	templateUrl:'./login.component.html',
	styleUrls:['./login.component.scss']
})
export class LoginComponent{

	constructor(private authService:AuthService, private router:Router,
	            private activatedRoute:ActivatedRoute){}

	handleLogin(name:string, password:string){
		
      if(this.authService.checkLoginRoleAndValidity({'name':name,'password':password})){
      	 this.router.navigate(['about']);
      }
       

	}

}