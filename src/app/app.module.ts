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
import { ChartsModule } from 'ng2-charts';

export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from './app.component';
import { UserFormComponent } from './user/user-form/user-form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UsersComponent } from './user/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HealthAppraisalQuestionnaireComponent } from './health-appraisal-questionnaire/health-appraisal-questionnaire.component';
import { HealthHistoryFormComponent } from './health-appraisal-questionnaire/health-history-form/health-history-form.component';
import { NutritionImmuneFormComponent } from './health-appraisal-questionnaire/nutrition-immune-form/nutrition-immune-form.component';
import { HaqFormComponent } from './health-appraisal-questionnaire/haq-form/haq-form.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    SignInComponent,
    UserDetailComponent,
    UsersComponent,
    HealthAppraisalQuestionnaireComponent,
    HealthHistoryFormComponent,
    NutritionImmuneFormComponent,
    HaqFormComponent,
    SignUpComponent,
    AuthComponent
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
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSortModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    FontAwesomeModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
