import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { PopupModule } from '@progress/kendo-angular-popup';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { GridModule } from '@progress/kendo-angular-grid';
import { EffectsModule } from '@ngrx/effects';

import {environment} from './../environments/environment'
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AddStudent} from './student/add-student/add-student.component';
import {EditStudentComponent} from './student/edit-student/edit-student.component';

import { StudentsListComponent } from './student/students-list/students-list.component';
import{StudentDetailComponent} from './student/student-detail/student-detail.component';

import {AppRoutingModule} from './app-routing.module';
import { AdmissionComponent } from './admission/admission.component';
import {HighlightDirective} from './directive/highlight.directive';
import {UnlessStrDirective} from './strcutre-directive/unless-str.directive';
import {DropdownDirective} from './directive/dropdown.directive';
import { AuthEffects } from './student/store/effects/trade_data_effect';



import {LoggingService} from './logging.service';
import {EventService} from './event.service';
import {ThanksComponent} from './thanks/thanks.component';
import {RatingComponent}  from './rating/rating.component';
import { CareerComponent } from './career/career.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AppService} from './app.service';
import {AuthService} from './auth.service';
import { FunComponent } from './fun/fun.component';
import {reducers} from './store/app.reducers';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdmissionComponent,
    HighlightDirective,
    UnlessStrDirective,
    DropdownDirective,
    ThanksComponent,
    RatingComponent,
    CareerComponent,
    LoginComponent,
    AddStudent,
    StudentDetailComponent,
    StudentsListComponent,
    EditStudentComponent,
    FunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
        HttpModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        PopupModule,
        FormsModule,
        GridModule,
        ButtonsModule,
        DialogModule,
        EffectsModule.forRoot([AuthEffects]),
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule,
        !environment.production?StoreDevtoolsModule.instrument():[]
  ],
  providers: [AppService,LoggingService,EventService,AuthGuardService,CanDeactivateGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
