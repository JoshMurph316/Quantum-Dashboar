import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UsersComponent } from './user/users/users.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { LandingComponent } from './landing/landing.component';
import { HealthAppraisalQuestionnaireComponent } from './health-appraisal-questionnaire/health-appraisal-questionnaire.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: LandingComponent},
  {path: 'home', component: HealthAppraisalQuestionnaireComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-detail/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
