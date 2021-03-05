import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { User } from './user/user';
import { UserService } from './user/user.service';
// import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'quantum-dashboard';
  isAuth = false;
  authSubscription: Subscription;
  userSubscription: Subscription;
  user: User;
  // faTwitter = faTwitter;
  // faFacebookSquare = faFacebookSquare;
  // faInstagram = faInstagram;

  constructor(private auth: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.auth.initAuthListener();
    this.authSubscription = this.auth.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.userSubscription = this.userService.userChanged.subscribe((user) => {
      this.user = user;
    })
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
