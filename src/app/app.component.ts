import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { QuestionService } from './health-appraisal-questionnaire/question/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'quantum-dashboard';

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
