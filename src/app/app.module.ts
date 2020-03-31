import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = environment.firebaseConfig;

import { AppComponent } from './app.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { SignInComponent } from './sign-in/sign-in.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UsersComponent } from './user/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserFormComponent,
    SignInComponent,
    UserDetailComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
