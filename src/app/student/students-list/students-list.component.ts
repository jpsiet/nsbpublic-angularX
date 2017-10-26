import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {StudentModel} from './../student.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as STACTION from '../store/student.actions';


import * as fromAppState from '../../store/app.reducers';
import * as fromStudentListReducer from '../store/student-list.reducer';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
	//studentInfoData:Observable<fromStudentListReducer.State>;
  studentInfoData:Promise<Array<object>>;

  constructor(private appService:AppService,
   private store:Store<fromAppState.AppState>, private router:Router) { }

  ngOnInit() {
   
    // this.store.dispatch( new STACTION.GETStudentData());
   //this.studentInfoData = this.store.select('studentsInfo');
  this.studentInfoData = this.appService.getStudentList();



   /*this.store.select('studentInfo').subscribe( function(value){
   	debugger;
   	console.log(value);

   }, function(err){
      
      console.log(err);
   })*/

		 /* 	 this.appService.getStudentList().then( (res:any) =>{
		  this.studentList = res;
		  }, (err) => {
		  	console.log(err);
		  })*/


  }
  handleDetails(){
    this.router.navigate(['/editStudent', new StudentModel('John',1,1)]);
  }
  handleClick(student:StudentModel){

    alert(student.name);
     
   }

}
