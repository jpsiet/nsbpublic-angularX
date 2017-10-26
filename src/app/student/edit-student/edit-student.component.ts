import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {StudentModel} from '../student.model';
import { Observable } from 'rxjs/Observable';

@Component({
	templateUrl:'./edit-student.component.html',
	styleUrls:['./edit-student.component.scss']

})
export class EditStudentComponent implements OnInit{
	constructor(private activatedRoute:ActivatedRoute){};
	studentDetail$: Observable<StudentModel>;
	studentData :StudentModel;

	ngOnInit(){

		this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
            this.studentData = params['params'];
		})

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