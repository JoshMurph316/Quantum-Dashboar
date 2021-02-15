import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { QuestionBase } from './question/question-base';
import { QuestionService } from './question/question.service';

@Component({
  selector: 'app-health-appraisal-questionnaire',
  templateUrl: './health-appraisal-questionnaire.component.html',
  styleUrls: ['./health-appraisal-questionnaire.component.css']
})
export class HealthAppraisalQuestionnaireComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;

  formQuestions = [ // each array object reps a form part formQuestions[0] = Form Part 1
    { //Part 1
      sections: [
        { section: 'A',
          questions: [
            { prompt: 'Indigestion, food repeats on you after you eat', type: 'freq'},
            { prompt: 'Excessive burping, belching and/or bloating following meals', type: 'freq'},
            { prompt: 'Stomach spasms and cramping during or after eating', type: 'freq'},
            { prompt: 'A sensation that food just sits in your stomach creating uncomfortable fullness, pressure and bloating during or after a meal', type: 'freq'},
            { prompt: 'Bad taste in your mouth', type: 'freq'},
            { prompt: 'Small amounts of food fill you up immediately', type: 'freq'},
            { prompt: 'Skip meals or eat erratically because you have no appetite', type: 'freq'}
          ]
        },
        { section: 'B',
        questions: [
          { prompt: 'Strong emotions, or the thought or smell of food aggravates your stomach or makes it hurt', type: 'freq'},
          { prompt: 'Excessive burping, belching and/or bloating following meals Feel hungry an hour or two after eating a good-sized meal ', type: 'freq'},
          { prompt: 'Stomach pain, burning and/or aching over a period of 1-4 hours after eating ', type: 'freq'},
          { prompt: 'Stomach pain, burning and/or aching relieved by eating food; drinking carbonated beverages, cream or milk; or taking antacids', type: 'freq'},
          { prompt: 'Burning sensation in the lower part of your chest, especially when lying down or bending forward', type: 'freq'},
          { prompt: 'Digestive problems that subside with rest and relaxation', type: 'yn'},
          { prompt: 'Eating spicy and fatty (fried) foods, chocolate, coffee, alcohol, citrus or hot peppers causes your stomach to burn or ache', type: 'freq'},
          { prompt: 'Feel a sense of nausea when you eat', type: 'freq'},
          { prompt: ' Difficulty or pain when swallowing food or beverage', type: 'freq'}
        ]

        }
      ] // end of sections
    },
    { //Part 2
      sections: [
        { section: 'A',
          questions: [
            { prompt: 'When massaging under your rib cage on your right side, there is pain, tenderness or soreness ', type: 'freq'},
            { prompt: 'Abdominal pain worsens with deep breathing', type: 'freq'},
            { prompt: 'Pain at night that may move to your back or right shoulder', type: 'freq'},
            { prompt: 'Bitter fluid repeats after eating', type: 'freq'},
            { prompt: 'Feel abdominal discomfort or nausea when eating rich, fatty or fried foods', type: 'freq'},
            { prompt: 'Throbbing temples and/or dull pain in forehead associated with overeating', type: 'freq'},
            { prompt: 'Unexplained itchy skin that’s worse at night', type: 'freq'},
            { prompt: 'Stool color alternates from clay colored to normal brown', type: 'freq'},
            { prompt: 'General feeling of poor health', type: 'freq'},
            { prompt: 'Aching muscles not due to exercise', type: 'freq'},
            { prompt: 'Retain fluid and feel swollen around the abdominal area', type: 'freq'},
            { prompt: 'Reddened skin, especially palms', type: 'freq'},
            { prompt: 'Very strong body odor', type: 'freq'},
            { prompt: 'Are you embarrassed by your breath?', type: 'freq'},
            { prompt: 'Bruise easily', type: 'yn'},
            { prompt: 'Yellowish cast to eyes', type: 'yn'}
          ]
        }
      ]
    },
    { //Part 3
      sections: [
        { section: 'A',
          questions: [
            { prompt: 'When massaging under your rib cage on your right side, there is pain, tenderness or soreness ', type: 'freq'},
            { prompt: 'Abdominal pain worsens with deep breathing', type: 'freq'},
            { prompt: 'Pain at night that may move to your back or right shoulder', type: 'freq'},
            { prompt: 'Bitter fluid repeats after eating', type: 'freq'},
            { prompt: 'Feel abdominal discomfort or nausea when eating rich, fatty or fried foods', type: 'freq'},
            { prompt: 'Throbbing temples and/or dull pain in forehead associated with overeating', type: 'freq'},
            { prompt: 'Unexplained itchy skin that’s worse at night', type: 'freq'},
            { prompt: 'Stool color alternates from clay colored to normal brown', type: 'freq'},
            { prompt: 'General feeling of poor health', type: 'freq'},
            { prompt: 'Aching muscles not due to exercise', type: 'freq'},
            { prompt: 'Retain fluid and feel swollen around the abdominal area', type: 'freq'},
            { prompt: 'Reddened skin, especially palms', type: 'freq'},
            { prompt: 'Very strong body odor', type: 'freq'},
            { prompt: 'Are you embarrassed by your breath?', type: 'freq'},
            { prompt: 'Bruise easily', type: 'yn'},
            { prompt: 'Yellowish cast to eyes', type: 'yn'}
          ]
        }
      ]
    }
  ]
  isLinear = true;
  haqForm: FormGroup;
  healthHistoryForm: FormGroup;
  selectedIndex = 0;

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
    this.haqForm = this._formBuilder.group({
      firstCtrl: ''
    })
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
    this.userService.addUser(this.healthHistoryForm.value);
  }

  // programatic tab switch example
  selectTab(index: number): void {
    this.selectedIndex = index;
  }

  // programatic stepper progression examples
  goBack(){
    this.myStepper.previous();
  }
  goForward(){
      this.myStepper.next();
  }


}
