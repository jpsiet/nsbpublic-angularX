import {Action} from '@ngrx/store';

import {StudentModel} from '../student.model';
import * as StudentListAction from './student.actions';

export interface State{
	isDataLoading:boolean,
	studentList: StudentModel []
}
const inittialState :State = {
	studentList:[],
	isDataLoading:false
}
export function StudentListReducer(state=inittialState , action:StudentListAction.
	StudentListActions) {
	

	switch(action.type){
        case StudentListAction.GET_STUDENT_DATA:
		return {...state,isDataLoading:action.payload}

		case StudentListAction.ADD_STUDENT_DATA:
		return {...state,studentList:[...state.studentList,action.payload]}
		case StudentListAction.STUDENT_DATA_RECIEVED:
		return {...state,studentList:action.payload,isDataLoading:false}

		case StudentListAction.STUDENT_DATA_UPDATED:
		return {...state, studentList:[...state.studentList.slice(0,action.payload['index']), action.payload['data'],
		...state.studentList.slice(action.payload['index']+1)]}

		case StudentListAction.DELETE_STUDENT_DATA:
		return {...state, studentList:[...state.studentList.slice(0,action.payload),
		...state.studentList.slice(action.payload+1)]}
		

	}
	return state;
}