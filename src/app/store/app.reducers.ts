import * as fromtudentListReducer from '../student/store/student-list.reducer';
import {ActionReducerMap} from '@ngrx/store';
export interface AppState{
	studentsInfo:fromtudentListReducer.State
}

export const reducers :ActionReducerMap<AppState> = {
   studentsInfo:fromtudentListReducer.StudentListReducer
}