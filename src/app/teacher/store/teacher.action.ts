import {Action} from '@ngrx/store';
export const GET_TEACHERS_DATA = 'GET_TEACHERS_DATA';

export class GetTeachersList implements Action{

	readonly type= GET_TEACHERS_DATA;
}

export class AddTeacher implements Action{

	readonly type= GET_TEACHERS_DATA;
}


export type TeacherListAction = GetTeachersList |AddTeacher;
