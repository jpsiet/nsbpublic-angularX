import {Action} from '@ngrx/store';

import {StudentModel} from '../student.model';
import * as StudentListAction from './student.actions';

export interface State{
	studentList: StudentModel []
}
const inittialState :State = {
	studentList:[ new StudentModel('John',1,1), new StudentModel('nancy',2,2)]
}
export function StudentListReducer(state=inittialState , action:StudentListAction.
	StudentListActions) {

	switch(action.type){

		/*case StudentListAction.GET_STUDENT_DATA:
		return state;
*/
		case StudentListAction.ADD_STUDENT_DATA:
		return {...state,studentList:[...state.studentList,action.payload]}
		

	}
	return state;
}