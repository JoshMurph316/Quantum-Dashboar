import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { QuestionService } from './health-appraisal-questionnaire/question/question.service';
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'quantum-dashboard';
  faTwitter = faTwitter;
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
