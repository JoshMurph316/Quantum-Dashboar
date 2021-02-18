import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from './app.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UsersComponent } from './user/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './auth/logout/logout.component';
import { LandingComponent } from './landing/landing.component';
import { HealthAppraisalQuestionnaireComponent } from './health-appraisal-questionnaire/health-appraisal-questionnaire.component';
import { QuestionComponent } from './health-appraisal-questionnaire/question/question.component';
import { HealthHistoryFormComponent } from './health-appraisal-questionnaire/health-history-form/health-history-form.component';
import { NutritionImmuneFormComponent } from './health-appraisal-questionnaire/nutrition-immune-form/nutrition-immune-form.component';
import { HaqFormComponent } from './health-appraisal-questionnaire/haq-form/haq-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserFormComponent,
    SignInComponent,
    UserDetailComponent,
    UsersComponent,
    LogoutComponent,
    LandingComponent,
    HealthAppraisalQuestionnaireComponent,
    QuestionComponent,
    HealthHistoryFormComponent,
    NutritionImmuneFormComponent,
    HaqFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
