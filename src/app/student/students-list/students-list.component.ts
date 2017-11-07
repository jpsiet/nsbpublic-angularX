import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core'
import {AppService} from '../../app.service';
import {StudentModel} from './../student.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as STACTION from '../store/student.actions';
import { RowArgs} from '@progress/kendo-angular-grid';


import * as fromAppState from '../../store/app.reducers';
import * as fromStudentListReducer from '../store/student-list.reducer';
import {StudentDetailComponent} from '../student-detail/student-detail.component';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
	//studentInfoData:Observable<fromStudentListReducer.State>;
  studentList:any;
  isDataLoading:boolean;
  show:boolean = false;
  currentSelectedIndex = -1;
  studentDetail :object= {"id":49,"rating":7,"standard":4,"subject":"Computer","firstName":"Tyler","rollNumber":50};
  

  @ViewChild(StudentDetailComponent)
  private studentDetailComp: StudentDetailComponent;

  constructor(private appService:AppService,
   private store:Store<fromAppState.AppState>, private router:Router) { }

  ngOnInit() {
   
    this.store.dispatch( new STACTION.FetchStudentData(true));
    this.store.select('studentsInfo').subscribe( (data)=>{
    
       this.studentList = data.studentList;
       this.isDataLoading = data.isDataLoading;
       
       console.log(this.studentList.length)

    });
  //this.studentInfoData = this.appService.getStudentList();



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
   getStudentDataByRollNumber(rollNumber){
      
      var obj = {};
      for(var i =0; this.studentList.length; i++){
       
         if(this.studentList[i].rollNumber === rollNumber){
             obj['data'] = this.studentList[i];;
             obj['index'] = i;
          return JSON.parse(JSON.stringify(obj));
        }
      }
      return obj
   }
   
  

  handleDetails(row){

    // Temporary solution to find the index of selected data
       if(row.target.checked){

         let  rollNumber = Number(row.target.parentNode.parentElement.cells[4].innerText);
          this.studentDetailComp.openDialog();
           let obj  = this.getStudentDataByRollNumber(rollNumber);
          this.studentDetail = obj['data'] || {};
          this.currentSelectedIndex = obj['index']
      }
   
  }


  handleClick(student:StudentModel){

    alert(student.name);
     
   }

}
