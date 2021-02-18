import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';
import { QuestionBase } from './question/question-base';
import { QuestionService } from './question/question.service';

@Component({
  selector: 'app-health-appraisal-questionnaire',
  templateUrl: './health-appraisal-questionnaire.component.html',
  styleUrls: ['./health-appraisal-questionnaire.component.css']
})
export class HealthAppraisalQuestionnaireComponent implements OnInit {
  healthHistoryForm: FormGroup;

  maritalStatusOptions = ['Single', 'Partner', 'Married', 'Separated', 'Divorced', 'Widow(er)'];
  therapyOptions = ['Diet Modification', 'Fasting', 'Vitamins/Minerals', 'Herbs', 'Homeopathy', 'Chiropractic', 'Acupuncture', 'Conventional Drugs'];

  questions$: Observable<QuestionBase<any>[]>;
  constructor(
    private _formBuilder: FormBuilder,
    private questionService: QuestionService,
    private userService: UserService
    ) {
    this.questions$ = questionService.getQuestions();
  }

  ngOnInit() {

    this.healthHistoryForm = this._formBuilder.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfForm: new Date(),
      occupation: ['', Validators.required],
      age: [null, Validators.required], // could be calculated from dateOfBirth
      height: ['', Validators.required],
      sex: ['', Validators.required],
      numberOfChildren: [0, Validators.required],
      maritalStatus: ['', Validators.required],
      fluStatus: [null, Validators.required],
      pregnant: [null, Validators.required],
      reasonForVisit: [null, Validators.required], // Form Group - text date
      dateLastExam: ['', Validators.required],
      practitioner: this._formBuilder.group({
        name: [null, Validators.required],
        number: [null, Validators.required]
      }),
      labs: ['', Validators.required],
      outcome: [''],
      therapy: this._formBuilder.group({
        diet_modification: [null, Validators.required],
        fasting: [null, Validators.required],
        vitamins_minerals: [null, Validators.required],
        herbs: [null, Validators.required],
        homeopathy: [null, Validators.required],
        chiropractic: [null, Validators.required],
        acupuncture: [null, Validators.required],
        conventional_drugs: [null, Validators.required],
        other: [null, Validators.required]
      }),
      healthProblems: [[], Validators.required],
      medications: [[], Validators.required],
      major: this._formBuilder.group({
        year: [null, Validators.required],
        operation: [null, Validators.required],
        outcome: [null, Validators.required]
      }),
      stressLevel: [null, Validators.required],
      stressCause: ['', Validators.required],
      weightClass: ['', Validators.required],
      weight: [null, Validators.required],
      weightLoss: [null, Validators.required],
      chemicalHandling: ['', Validators.required],
      medicalDevices: this._formBuilder.group({
        corrective_lenses: [null, Validators.required],
        dentures: [null, Validators.required],
        heaing_aid: [null, Validators.required],
        other: [null, Validators.required]
      }),
      abilityChanges: this._formBuilder.group({
        see: [null, Validators.required],
        hear: [null, Validators.required],
        taste: [null, Validators.required],
        smell: [null, Validators.required],
        feel: [null, Validators.required],
        move: [null, Validators.required]
      }),
      flavorLikes: this._formBuilder.group({
        sour: [null, Validators.required],
        bitter: [null, Validators.required],
        sweet: [null, Validators.required],
        rich_fatty: [null, Validators.required],
        spicy_pungent: [null, Validators.required],
        salty: [null, Validators.required]
      }),
      flavorDislikes: this._formBuilder.group({
        sour: [null, Validators.required],
        bitter: [null, Validators.required],
        sweet: [null, Validators.required],
        rich_fatty: [null, Validators.required],
        spicy_pungent: [null, Validators.required],
        salty: [null, Validators.required]
      }),
      tempPreference: [null, Validators.required],
      disturbedSleep: [null, Validators.required],
      leastSymptomTime: this._formBuilder.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      }),
      mostSymptomTime: this._formBuilder.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      }),
      dailySymptoms: [null, Validators.required],
      medicalHistory: [null, Validators.required],
      familyHistroy: [null, Validators.required],
      healthHabits: [null, Validators.required],
      exercise: [null, Validators.required],
      nutrition: [null, Validators.required],
      foodFrequency: [null, Validators.required],
      eatingHabits: [null, Validators.required],
      supplements: [null, Validators.required],
      goals: [null, Validators.required]
    })
  }

  onSubmit() {
    // this.userService.updateUser(this.healthHistoryForm.value);
    this.userService.createNewUser(this.healthHistoryForm.value);
  }




}
