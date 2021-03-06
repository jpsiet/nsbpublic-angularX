import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent }   from './contact-us/contact-us.component';
import { AboutUsComponent }   from './about-us/about-us.component';
import { AdmissionComponent }   from './admission/admission.component';
import {ThanksComponent} from './thanks/thanks.component';
import {CareerComponent} from './career/career.component';
import {LoginComponent} from './login/login.component';

import { StudentsListComponent } from './student/students-list/students-list.component';
import {AddStudent} from './student/add-student/add-student.component';

import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import { FunComponent } from './fun/fun.component';


import {EditStudentComponent} from './student/edit-student/edit-student.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about',  component: AboutUsComponent, canDeactivate:[CanDeactivateGuard] },
  { path: 'login',  component: LoginComponent },
  
   { path: 'admission',  component: AdmissionComponent },
   
     { path: 'students',  component: StudentsListComponent },
   {path:'fun', component:FunComponent},
   
  { path: 'contact', component:ContactUsComponent,
     children:[
	    { path: ':id',  component: CareerComponent }
	  ] 
}];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{enableTracing:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}