import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UsersComponent } from './user/users/users.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { LandingComponent } from './landing/landing.component';
import { HealthAppraisalQuestionnaireComponent } from './health-appraisal-questionnaire/health-appraisal-questionnaire.component';
import { AuthGuard } from './auth/auth.guard';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HealthHistoryFormComponent } from './health-appraisal-questionnaire/health-history-form/health-history-form.component';
import { NutritionImmuneFormComponent } from './health-appraisal-questionnaire/nutrition-immune-form/nutrition-immune-form.component';
import { HaqFormComponent } from './health-appraisal-questionnaire/haq-form/haq-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: LandingComponent,
    children: [
      { path: '', component: SignUpComponent},
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
  {
    path: 'forms',
    component: HealthAppraisalQuestionnaireComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: HaqFormComponent },
      { path: 'health-history', component: HealthHistoryFormComponent },
      { path: 'nutrition-immune', component: NutritionImmuneFormComponent },
      { path: 'health-appraisal', component: HaqFormComponent }
    ]
  },
  { path: 'dashboard', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard]},
  { path: 'user-detail/:id', component: UserDetailComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
