// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<Action> = this.actions$.ofType('GET_STUDENT_DATA')
    .mergeMap(action =>
      this.http.get('localhost:8080/nsbpublic/api/student/')
        // If successful, dispatch success action with result
        .map(data => ({ type: 'LOGIN_SUCCESS', payload: data }))
        // If request fails, dispatch failed action
        .catch(() => of({ type: 'LOGIN_FAILED' }))
    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}      
}