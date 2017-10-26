import {Component, OnInit} from '@angular/core'; 
import {AppService} from './../app.service';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import *  as fromAppReducer from '../store/app.reducers';
import * as fromTeacherListReducer from './store/teacher-list-reducer';
import {TeacherModel} from './teacher.model';
@Component({
	selector:"teacher-list",
	templateUrl:"./teacher-list.component.html",
	styleUrls:["./teacher-list.scss"]
})
export class  TeacherListComponent implements OnInit{

	teachersInfo :Observable<fromTeacherListReducer.State>
	constructor(private appService:AppService, private store:Store<fromAppReducer.AppState>){}

 ngOnInit(){

    this.teachersInfo = this.store.select('teachersInfo')

 }
  


}