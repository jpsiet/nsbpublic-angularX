import * as fromtudentListReducer from '../student/store/student-list.reducer';
import * as fromTeacherListReducer from '../teacher/store/teacher-list-reducer';
import {ActionReducerMap} from '@ngrx/store';
export interface AppState{
	studentsInfo:fromtudentListReducer.State,
	teachersInfo:fromTeacherListReducer.State
}

export const reducers :ActionReducerMap<AppState> = {
   studentsInfo:fromtudentListReducer.StudentListReducer,
   teachersInfo:fromTeacherListReducer.TeacherListReducer
}