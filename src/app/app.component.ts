import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
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
  // faTwitter = faTwitter;
  // faFacebookSquare = faFacebookSquare;
  // faInstagram = faInstagram;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.initAuthListener();
    this.authSubscription = this.auth.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
