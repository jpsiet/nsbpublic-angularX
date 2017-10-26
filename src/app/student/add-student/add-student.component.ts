import {Component,OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StudentModel} from '../student.model';
import * as StudentListActions from './../store/student.actions';

@Component({
	selector:'add-student',
	templateUrl:'./add-student.html',
	styleUrls:['./add-student.scss']

})
export class AddStudent implements OnInit{
	student : StudentModel;
	constructor(private store:Store<{studentInfo: {studentList: 
  	StudentModel[]}}>){}
	
	ngOnInit(){

	}
	addStudent(name:any,rating:any,standard:any){
	
		this.student = new StudentModel(name.value,rating.value,standard.value);
		this.store.dispatch( new StudentListActions.AddStudent(this.student));
		
	}

	  public opened: boolean = true;

    public close(status) {
      console.log(`Dialog result: ${status}`);
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }
}