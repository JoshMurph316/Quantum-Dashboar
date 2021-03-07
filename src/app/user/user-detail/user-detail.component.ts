import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HAQ } from 'src/app/health-appraisal-questionnaire/haq-form/haq-form.model';
import { HealthHistory } from 'src/app/health-appraisal-questionnaire/health-history-form/health-history.model';
import { NutritionImmune } from 'src/app/health-appraisal-questionnaire/nutrition-immune-form/nutrition-immune.model';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  Object = Object;
  private userSubscription: Subscription;
  private $id: string;
  user: User;
  haq: HAQ;
  healthHistory: HealthHistory;
  nutritionImmune: NutritionImmune;

  constructor(
    private usrSvc: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.$id = this.route.snapshot.params['id'];

    this.userSubscription = this.usrSvc.getUserDetails(this.$id).subscribe(user => {
      this.user = user;
      this.haq = user.haqForm;
      this.healthHistory = user.healthHistory;
      this.nutritionImmune = user.nutritionImmune;

      console.log(this.haq);
    });

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
