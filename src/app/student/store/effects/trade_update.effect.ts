// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {fromPromise} from 'rxjs/observable/fromPromise'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as fromStudentAction from '../student.actions';

const baseUrl = "http://localhost:3000/";
   
@Injectable()
export class TradeUpdateEffect {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<Action> = this.actions$.ofType(fromStudentAction.TRY_UPDATE_STUDENT_DATA)
  .delay(2000)
  .map( (action:fromStudentAction.FetchStudentData) => { return true;})
    .switchMap(data =>  this.http.get(`${baseUrl}api/students/`))
     .map(data => {console.log(data); return data['_body'] })
        // If successful, dispatch success action with result
    .map(data => ({ type: fromStudentAction.STUDENT_DATA_RECIEVED, payload: JSON.parse(data) }));

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}      
}