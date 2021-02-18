import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  registerNewUser(userData: {email: string, password: string}) {
    this.auth.createUserWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      console.log(result);
      this.isAuthenticated = true;
    })
    .catch(error => {
      console.log(error);
    })
  }

  loginReturningUser(userData: {email: string, password: string}){
    this.auth.signInWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      console.log(result);
      this.isAuthenticated = true;
    })
    .catch(error => {
      console.log(error);
    })
  }

  logout() {
    this.auth.signOut();
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }

}
