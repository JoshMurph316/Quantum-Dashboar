import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  registerNewUser(userData: {username: string, password: string}) {
    this.auth.createUserWithEmailAndPassword(userData.username, userData.password)
    .then(result => {
      console.log(result);
      this.isAuthenticated = true;
    })
    .catch(error => {
      console.log(error);
    })
  }

  loginReturningUser(userData: {username: string, password: string}){
    this.auth.signInWithEmailAndPassword(userData.username, userData.password)
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
