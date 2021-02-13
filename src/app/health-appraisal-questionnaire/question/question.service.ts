import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { InputQuestion } from './question-input';
import { of } from 'rxjs';
import { CheckboxQuestion } from './question-checkbox';

@Injectable()
export class QuestionService {

  constructor() { }

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new InputQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new InputQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new CheckboxQuestion({
        key: 'dailySymptoms',
        label: 'Do you experience any of these general symptoms EVERY DAY?',
        order: 10,
        options: [
          {key: 'fatigue', value: 'Debilitating fatigue'},
          {key: 'depression', value: 'Depression'},
          {key: 'sex_disinterest', value: 'Disinterest in sex'},
          {key: 'eating_disinterest', value: 'Disinterest in eating'},
          {key: 'short_breath', value: 'Shortness of breath'},
          {key: 'panic_attack', value: 'Panic attack'},
          {key: 'headache', value: 'Headache'},
          {key: 'dizziness', value: 'Dizziness'},
          {key: 'insomnia', value: 'Insomnia'},
          {key: 'nausea', value: 'Nausea'},
          {key: 'vomiting', value: 'Vomiting'},
          {key: 'diarrhea', value: 'Diarrhea'},
          {key: 'constipation', value: 'Constipation'},
          {key: 'fecal_incontinence', value: 'Fecal incontinence'},
          {key: 'urinary_incontinence', value: 'Urinary incontinence'},
          {key: 'low_fever', value: 'Low grade fever'},
          {key: 'pain_inflammation', value: 'Cronic pain/inflammation'},
          {key: 'bleeding', value: 'Bleeding'},
          {key: 'discharge', value: 'Discharge'},
          {key: 'itching_rash', value: 'Itching/rash'},
        ]
      }),
      new CheckboxQuestion({
        key: 'medicalHistory',
        label: 'Medical History',
        order: 11,
        options: [
          {key: 'arthritis', value: 'Arthritis'},
          {key: 'allergies_hayfever', value: 'Allergies/hayfever'},
          {key: 'asthma', value: 'Asthma'},
          {key: 'alcoholism', value: 'Alcoholism'},
          {key: 'alzheimers', value: 'Alzheimer\'s disease'},
          {key: 'autoimmune', value: 'Autoimmune disease'},
          {key: 'blood_pressure', value: 'Blood pressure problems'},
          {key: 'bronchitis', value: 'Bronchitis'},
          {key: 'cancer', value: 'Cancer'},
          {key: 'cfs', value: 'Chronic fatigue syndrome'},
          {key: 'cts', value: 'Carpal tunnel syndrome'},
          {key: 'cholesterol', value: 'Cholesterol, elevated'},
          {key: 'circulatory', value: 'Circulatory problems'},
          {key: 'colitis', value: 'Colitis'},
          {key: 'dental', value: 'Dental problems'},
          {key: 'depression', value: 'Depression'},
          {key: 'diabetes', value: 'Diabetes'},
          {key: 'diverticular', value: 'Diverticular disease'},
          {key: 'drug_additiction', value: 'Drug addiction'},
          {key: 'eating_disorder', value: 'Eating disorder'},
          {key: 'epilepsy', value: 'Epilepsy'},
          {key: 'emphysema', value: 'Emphysema'},
          {key: 'eent_problems', value: 'Eyes, ears, nose, throat problems'},
          {key: 'enviro_sens', value: 'Environmental sensitivities'},
          {key: 'fibromyalgia', value: 'Fibromyalgia'},
          {key: 'food_intolerance', value: 'Food intolerance'},
          {key: 'gastro_reflux', value: 'Gastroesophageal reflux disease'},
          {key: 'genetic', value: 'Genetic disorder'},
          {key: 'glaucoma', value: 'Glaucoma'},
          {key: 'gout', value: 'Gout'},
          {key: 'heath_disease', value: 'Heart disease'},
          {key: 'chronic_infection', value: 'Infection, chronic'},
          {key: 'chronic_infection', value: 'Infection, chronic'},
          {key: 'inflam_bowel', value: 'Inflammatory bowel disease'},
          {key: 'irritable_bowel', value: 'Irritable bowel syndrome'},
          {key: 'kidney_bladder', value: 'Kidney or bladder disease'},
          {key: 'liver_gall', value: 'Liver or gallbladder disease(stones)'},
          {key: 'mental_illness', value: 'Mental illness'},
          {key: 'mental_retardation', value: 'Mental retardation'},
          {key: 'migraine', value: 'Migraine headaches'},
          {key: 'neuro', value: 'Neurological problems(Parkinson\'s, paralysis)'},
          {key: 'sinus', value: 'Sinus problems'},
          {key: 'stroke', value: 'Stroke'},
          {key: 'thyroid', value: 'Thyroid trouble'},
          {key: 'obesity', value: 'Obesity'},
          {key: 'osteoporosis', value: 'Osteoporosis'},
          {key: 'pneumonia', value: 'Pneumonia'},
          {key: 'std', value: 'Sexually transmitted disease'},
          {key: 'sad', value: 'Seasonal affective disorder'},
          {key: 'skin_problems', value: 'Skin problems'},
          {key: 'tuberculosis', value: 'Tuberculosis'},
          {key: 'ulcer', value: 'Ulcer'},
          {key: 'uti', value: 'Urinary tract infection'},
          {key: 'varicose', value: 'Varicose veins'},
        ]
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}

/**
 *
 *
 * this.healthHistoryForm = this._formBuilder.group({
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
      }), // Form Group - name number
      labs: ['', Validators.required],
      outcome: ['', Validators.required],
      therapy: [null, Validators.required],
      healthProblems: [[], Validators.required],
      medications: [[], Validators.required],
      major: this._formBuilder.group({
        year: [null, Validators.required],
        operation: [null, Validators.required],
        outcome: [null, Validators.required]
      }),
      stressLevel: [0, Validators.required],
      stressCause: ['', Validators.required],
      weightClass: ['', Validators.required],
      weight: [0, Validators.required],
      weightLoss: [null, Validators.required],
      chemicalHandling: ['', Validators.required],
      medicalDevices: [null, Validators.required],
      abilityChanges: [null, Validators.required],
      flavorLikes: [null, Validators.required],
      flavorDislikes: [null, Validators.required],
      tempPreference: ['', Validators.required],
      disturbedSleep: [null, Validators.required],
      leastSymptomTime: ['', Validators.required],
      mostSymptomTime: ['', Validators.required],
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
 */
