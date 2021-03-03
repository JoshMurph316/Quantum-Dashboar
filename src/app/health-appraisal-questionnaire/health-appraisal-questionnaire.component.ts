import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-health-appraisal-questionnaire',
  templateUrl: './health-appraisal-questionnaire.component.html',
  styleUrls: ['./health-appraisal-questionnaire.component.css']
})
export class HealthAppraisalQuestionnaireComponent implements OnInit {
  userSubscription: Subscription;
  userData: User;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userChanged.subscribe((user: User) => {
      console.log(user)
      this.userData = user;
    });
  }
}
