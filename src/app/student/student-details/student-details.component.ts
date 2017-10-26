import {Component, OnInit} from '@angular/core';
import {StudentModel} from '../student.model';
@Component({
	selector: 'student-details',
	templateUrl:'student-detail.component.html'
})
export class StudentDetailsComponent implements OnInit{
    student:StudentModel;
	ngOnInit(){
		
	}



}