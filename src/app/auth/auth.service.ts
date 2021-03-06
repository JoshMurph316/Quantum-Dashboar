import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private isAuthenticated = false;
  private usersSubscription: Subscription;
  authChange = new Subject<boolean>();

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private userService: UserService
    ) { }

    initAuthListener() {
      this.auth.authState.subscribe(user => {
        // console.log(user.email)
        if(user) {
          this.userService.currentUserData(user.email);
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/forms']);
        } else {
          this.userService.cancelSubscriptions();
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
      // this.router.navigate(['/forms/health-history']);
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
            // this.router.navigate(['/forms/health-history']);
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
    // this.router.navigate(['/home']);
  }

  getAuthStatus() {
    return this.isAuthenticated;
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
