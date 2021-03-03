import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  authChange = new Subject<boolean>();
  private usersSubscription: Subscription;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private userService: UserService
    ) { }

    initAuthListener() {
      this.auth.authState.subscribe(user => {
        if(user) {
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/forms/health-history']);
        } else {
          // this.usersSubscription.unsubscribe();
          this.isAuthenticated = false;
          this.authChange.next(false);
          this.router.navigate(['/home']);
        }
      });
    }

  registerNewUser(userData: {email: string, password: string}) {
    this.auth.createUserWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      this.userService.createNewUser({email: result.user.email});
    })
    .catch(error => {
      console.log(error);
    });
  }

  loginReturningUser(userData: {email: string, password: string}){
    this.auth.signInWithEmailAndPassword(userData.email, userData.password)
    .then(result => {
      this.usersSubscription = this.userService.getUsers().subscribe(users => {
        users.forEach(user => {
          if(user.email === result.user.email) {
            this.userService.getUserDetails(user.$id);
            return;
          }
        });
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.auth.signOut();
  }

  getAuthStatus() {
    return this.isAuthenticated;
  }

}
