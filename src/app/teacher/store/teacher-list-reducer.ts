import * as fromTeacherAction from './teacher.action';
import {TeacherModel} from '../teacher.model';

export interface State{
	 teacherList : TeacherModel[]
}
const initalState : State = {
   teacherList : [ new TeacherModel('nini', 2), new TeacherModel('Ram',2)]
}
export function TeacherListReducer(state = initalState, action:fromTeacherAction.TeacherListAction){
	switch (action.type) {
		case fromTeacherAction.GET_TEACHERS_DATA:
			return state
		
		default:
			// code...
			return state;
	}

}
