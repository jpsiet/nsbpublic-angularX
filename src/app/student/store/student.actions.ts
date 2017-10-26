import {Action} from '@ngrx/store';

export const GET_STUDENT_DATA = 'getstudentdata';
export const ADD_STUDENT_DATA = 'addstudentdata';
import {StudentModel} from '../student.model';

export class GETStudentData implements Action{
	readonly type = GET_STUDENT_DATA;
	
} 
export class AddStudent implements Action{
	readonly type = ADD_STUDENT_DATA;

	constructor(public payload:StudentModel){}
} 

export type StudentListActions = GETStudentData|AddStudent;