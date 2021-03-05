import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HAQForm } from 'src/app/health-appraisal-questionnaire/haq-form/haq-form.model';
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
  userSubscription: Subscription;
  $id: string;
  user: User;
  haq: HAQForm;
  healthHistory: HealthHistory;
  nutritionImmune: NutritionImmune;

  haqTabLabels = [
    'Gastrointestinal',
    'Liver/GB',
    'Endocrine',
    'Glucose Regulation',
    'Cardiovascular',
    'Mood',
    'Immune',
    'Urological',
    'Musculoskeletal',
    'CNS & Brain',
    'Male',
    'Female'
  ]
  haqDataSums = [
    { key: 'Gastrointestinal', value: 0 },
    { key: 'Liver/GB', value: 0 },
    { key: 'Endocrine', value: 0 },
    { key: 'Glucose Regulation', value: 0 },
    { key: 'Cardiovascular', value: 0 },
    { key: 'Mood', value: 0 },
    { key: 'Immune', value: 0 },
    { key: 'Urological', value: 0 },
    { key: 'Musculoskeletal', value: 0 },
    { key: 'CNS & Brain', value: 0 },
    { key: 'Male', value: 0 },
    { key: 'Female', value: 0 }
  ]

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
      this.calculateDataSums();
    });

  }

  calculateDataSums() {
    console.log(this.haq)
    Object.values(this.haq).forEach(part => {
      console.log(part)
      Object.values(part).forEach(section => {
        console.log(section);
      })
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
