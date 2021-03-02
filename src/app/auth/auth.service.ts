import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private isAuthenticated = false;
  private usersSubscription: Subscription;

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
      this.usersSubscription = this.userService.getUsers().subscribe(users => {
        users.forEach(user => {
          if(user.email === result.user.email) {
            this.userService.getUserDetails(user.$id);
            return;
          }
        });
      })
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

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
