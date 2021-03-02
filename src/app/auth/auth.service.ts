import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private userService: UserService
    ) { }

  registerNewUser(userData: {email: string, password: string}) {
    this.auth.createUserWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      this.userService.createNewUser({email: result.user.email});
      this.isAuthenticated = true;
      this.router.navigate(['/forms/health-history']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  loginReturningUser(userData: {email: string, password: string}){
    this.auth.signInWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      this.isAuthenticated = true;
      this.router.navigate(['/forms/health-history']);
    })
    .catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.auth.signOut();
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

}
