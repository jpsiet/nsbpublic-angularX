import {Action} from '@ngrx/store';

export const GET_STUDENT_DATA = 'GET_STUDENT_DATA';
export const ADD_STUDENT_DATA = 'ADD_STUDENT_DATA';
export const TRY_UPDATE_STUDENT_DATA = 'TRY_UPDATE_STUDENT_DATA';
export const STUDENT_DATA_UPDATED = 'STUDENT_DATA_UPDATED';
export const STUDENT_DATA_RECIEVED = 'STUDENT_DATA_RECIEVED';
export const DELETE_STUDENT_DATA = 'DELETE_STUDENT_DATA';
import {StudentModel} from '../student.model';

export class FetchStudentData implements Action{
	readonly type = GET_STUDENT_DATA;
	constructor(public payload:boolean){}
	
} 
export class StudentDataReceived implements Action{
	readonly type = STUDENT_DATA_RECIEVED;
	constructor(public payload:any){}
	
} 
export class AddStudent implements Action{
	readonly type = ADD_STUDENT_DATA;

	constructor(public payload:StudentModel){}
} 

export class StudentDataUpdated implements Action{
	readonly type = STUDENT_DATA_UPDATED;
	constructor(public payload:object){}
} 

export class DeleteStudentData implements Action{
	readonly type = DELETE_STUDENT_DATA;
	constructor(public payload:number){}
} 

export type StudentListActions = FetchStudentData|AddStudent|DeleteStudentData|
StudentDataReceived|StudentDataUpdated;