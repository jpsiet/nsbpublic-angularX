import {Component,OnInit,Input} from '@angular/core';

import {Store} from '@ngrx/store';
import * as fromAppState from '../../store/app.reducers';
import * as fromStudentAction from '../store/student.actions';
@Component({
   selector:'student-details',
   templateUrl:'./student-detail.html',
   styleUrls:['./student-detail.css']
 })
export class StudentDetailComponent implements OnInit{

	show:boolean = false;
  @Input()
  currentStudentViewIndex :number = -1;
	@Input()
	studentDetails:object = {"id":49,"rating":7,"standard":4,"subject":"Computer","firstName":"Tyler","rollNumber":50};


constructor(private store:Store<fromAppState.AppState>){

}

   public close(status) {
      console.log(`Dialog result: ${status}`);
      this.show = false;
    }
    

   ngOnInit(){};

   openDialog(){
     this.show = true;
   }
   updateStudentRecord(){

     this.store.dispatch(new fromStudentAction.StudentDataUpdated(
       {'data':this.studentDetails, 'index':this.currentStudentViewIndex}));
    // this.show = false;
       this.close('yes');
   }

   deleteHero(){
    this.store.dispatch(new fromStudentAction.DeleteStudentData(
       this.currentStudentViewIndex));
   	this.close('yes');
   //  this.show = false;

   }
}