import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-health-history-form',
  templateUrl: './health-history-form.component.html',
  styleUrls: ['./health-history-form.component.css']
})
export class HealthHistoryFormComponent implements OnInit {
  healthHistoryForm: FormGroup;

  maritalStatusOptions = ['Single', 'Partner', 'Married', 'Separated', 'Divorced', 'Widow(er)'];
  therapyOptions = ['Diet Modification', 'Fasting', 'Vitamins/Minerals', 'Herbs', 'Homeopathy', 'Chiropractic', 'Acupuncture', 'Conventional Drugs'];
  dailySymptomOptions = ['fatigue', 'depression', 'sex_disinterest', 'eating_disinterest', 'short_breath',
    'panic_attack', 'headache', 'dizziness', 'insomnia', 'nausea', 'vomiting', 'diarrhea', 'constipation',
    'fecal_incontinence', 'urinary_incontinence', 'low_fever', 'pain_inflammation', 'bleeding', 'discharge', 'itching_rash'];
  medicalHistoryOptions = ['arthritis', 'allergies_hayfever', 'asthma', 'alcoholism', 'alzheimers', 'autoimmune',
    'blood_pressure', 'bronchitis', 'cancer', 'cfs', 'cts', 'cholesterol', 'circulatory', 'colitis', 'dental',
    'depression', 'diabetes', 'diverticular', 'drug_additiction', 'eating_disorder', 'epilepsy', 'emphysema',
    'eent_problems', 'enviro_sens', 'fibromyalgia', 'food_intolerance', 'gastro_reflux', 'genetic', 'glaucoma',
    'gout', 'heath_disease', 'chronic_infection', 'inflam_bowel', 'irritable_bowel', 'kidney_bladder', 'liver_gall',
    'mental_illness', 'mental_retardation', 'migraine', 'neuro', 'sinus', 'stroke', 'thyroid', 'obesity', 'osteoporosis',
    'pneumonia', 'std', 'sad', 'skin_problems', 'tuberculosis', 'ulcer', 'uti', 'varicose'];
  medicalMenOptions = [];
  medicalWomenOptions = [];
  familyHistoryOptions = [];
  healthHabitsOptions = [];
  exerciseOptions = [];
  nutritionDietOptions = [];
  foodFreqOptions = [];
  eatingHabitOptions = [];
  currentSuppOptions = [];
  likeOptions = [];


  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService
    ) {
  }

  ngOnInit() {

    this.healthHistoryForm = this._formBuilder.group({
      name: [''],
      dateOfBirth: [''],
      dateOfForm: new Date(),
      occupation: [''],
      age: [null],
      height: [''],
      sex: [''],
      numberOfChildren: [0],
      maritalStatus: [''],
      fluStatus: [null],
      pregnant: [null],
      reasonForVisit: [null],
      dateLastExam: [''],
      practitioner: this._formBuilder.group({
        name: [null],
        number: [null]
      }),
      labs: [''],
      outcome: [''],
      therapy: this._formBuilder.group({
        diet_modification: [false],
        fasting: [false],
        vitamins_minerals: [false],
        herbs: [false],
        homeopathy: [false],
        chiropractic: [false],
        acupuncture: [false],
        conventional_drugs: [false],
        other: [false]
      }),
      healthProblems: [[]],
      medications: [[]],
      major: this._formBuilder.group({
        year: [null],
        operation: [null],
        outcome: [null]
      }),
      stressLevel: [null],
      stressCause: [''],
      weightClass: [''],
      weight: [null],
      weightLoss: [null],
      chemicalHandling: [''],
      medicalDevices: this._formBuilder.group({
        corrective_lenses: [false],
        dentures: [false],
        heaing_aid: [false],
        other: [null]
      }),
      abilityChanges: this._formBuilder.group({
        see: [false],
        hear: [false],
        taste: [false],
        smell: [false],
        feel: [false],
        move: [false]
      }),
      flavorLikes: this._formBuilder.group({
        sour: [false],
        bitter: [false],
        sweet: [false],
        rich_fatty: [false],
        spicy_pungent: [false],
        salty: [false]
      }),
      flavorDislikes: this._formBuilder.group({
        sour: [false],
        bitter: [false],
        sweet: [false],
        rich_fatty: [false],
        spicy_pungent: [false],
        salty: [false]
      }),
      tempPreference: [null],
      disturbedSleep: [null],
      disturbedSleepTime: [null],
      leastSymptomTime: this._formBuilder.group({
        start: [null],
        end: [null]
      }),
      mostSymptomTime: this._formBuilder.group({
        start: [null],
        end: [null]
      }),
      dailySymptoms: this._formBuilder.group({
        fatigue: [false],
        depression: [false],
        sex_disinterest: [false],
        eating_disinterest: [false],
        short_breath: [false],
        panic_attack: [false],
        headache: [false],
        dizziness: [false],
        insomnia: [false],
        nausea: [false],
        vomiting: [false],
        diarrhea: [false],
        constipation: [false],
        fecal_incontinence: [false],
        urinary_incontinence: [false],
        low_fever: [false],
        pain_inflammation: [false],
        bleeding: [false],
        discharge: [false],
        itching_rash: [false]
      }),
      medicalHistory: this._formBuilder.group({
        arthritis: [false],
        allergies_hayfever: [false],
        asthma: [false],
        alcoholism: [false],
        alzheimers: [false],
        autoimmune: [false],
        blood_pressure: [false],
        bronchitis: [false],
        cancer: [false],
        cfs: [false],
        cts: [false],
        cholesterol: [false],
        circulatory: [false],
        colitis: [false],
        dental: [false],
        depression: [false],
        diabetes: [false],
        diverticular: [false],
        drug_addiction: [false],
        eating_disorder: [false],
        epilepsy: [false],
        emphysema: [false],
        eent_problems: [false],
        enviro_sens: [false],
        fibromyalgia: [false],
        food_intolerance: [false],
        gastro_reflux: [false],
        genetic: [false],
        glaucoma: [false],
        gout: [false],
        heart_disease: [false],
        chronic_infection: [false],
        inflam_bowel: [false],
        irritable_bowel: [false],
        kidney_bladder: [false],
        learning_disabilities: [false],
        liver_gall: [false],
        mental_illness: [false],
        mental_retardation: [false],
        migraine: [false],
        neuro: [false],
        sinus: [false],
        stroke: [false],
        thyroid: [false],
        obesity: [false],
        osteoporosis: [false],
        pneumonia: [false],
        std: [false],
        sad: [false],
        skin_problems: [false],
        tuberculosis: [false],
        ulcer: [false],
        uti: [false],
        varicose: [false],
        other: ['']
      }),
      medicalMen: this._formBuilder.group({
        bph: [false],
        prostate_cancer: [false],
        sex_drive: [false],
        infertility: [false],
        std: [false],
        other: ''
      }),
      medicalWomen: this._formBuilder.group({
        menstrual_irregularities: [false],
        endometriosis: [false],
        infertility: [false],
        fibrocystic_breast: [false],
        fibroid_ovarion_cysts: [false],
        pms: [false],
        breast_cancer: [false],
        pelvic_inflammatory_disease: [false],
        vaginal_infections: [false],
        sex_drive: [false],
        std: [false],
        other: [''],
        age_first_period: [null],
        date_last_gyno: [''],
        mammogram: [null],
        pap: [null],
        birth_control: [''],
        num_children: [null],
        num_pregnancies: [null],
        c_section: [false],
        surgical_menopause: [false],
        menopause: [false],
        date_last_menstrual: [''],
        cycle_length: [false],
        time_between_cycles: [false],
        menstrual_changes: ['']
      }),
      familyHistroy: this._formBuilder.group({
        arthritis_rheumatoid: [false],
        asthma: [false],
        alcoholism: [false],
        alzheimers: [false],
        cancer: [false],
        depression: [false],
        diabetes: [false],
        drug_addiction: [false],
        eating_disorder: [false],
        genetic_disorder: [false],
        glaucoma: [false],
        heart_disease: [false],
        infertility: [false],
        learning_disabilities: [false],
        mental_illness: [false],
        mental_retardation: [false],
        migraine_headaches: [false],
        neurological_disorders: [false],
        obesity:  [false],
        osteoporosis: [false],
        stroke: [false],
        suicide: [false],
        other: ['']
      }),
      healthHabits: this._formBuilder.group({
        tobacco: [false],
        num_cigarettes: [null],
        num_cigars: [null],
        alcohol: [false],
        num_wine: [null],
        num_liquor: [null],
        num_beer: [null],
        caffeine: [false],
        num_coffee: [null],
        num_tea: [null],
        num_soda: [null],
        other_sources: [''],
        num_water: [null]
      }),
      exercise: this._formBuilder.group({
        '5-7dpw': [false],
        '3-4dpw': [false],
        '1-2dpw': [false],
        '45mins': [null],
        '30-45mins': [null],
        'less than 30mins': [null],
        walk: [false],
        run: [false],
        lift: [false],
        swim: [false],
        box: [false],
        yoga: [false]
      }),
      nutrition: this._formBuilder.group({
        mixed_food: [false],
        vegetarian: [false],
        vegan: [false],
        salt_restriction: [false],
        fat_restriction: [false],
        carb_restriction: [false],
        zone_diet: [false],
        calorie_restriction: [false],
        specific_restrictions: this._formBuilder.group({
          dairy: [false],
          wheat: [false],
          eggs: [false],
          soy: [false],
          corn: [false],
          gluten: [false],
          other: ['']
        })
      }),
      foodFrequency: this._formBuilder.group({
        fruit: [''],
        vegetables: [''],
        grains: [''],
        beans: [''],
        dairy: [''],
        meat: ['']
      }),
      eatingHabits: this._formBuilder.group({
        skip_breakfast: [false],
        two_meals: [false],
        one_meal: [false],
        graze: [false],
        food_rotation: [false],
        eat_constantly: [false],
        on_the_run: [false],
        add_salt: [false]
      }),
      supplements: this._formBuilder.group({
        multivitamin_mineral: [false],
        vitamine_c: [false],
        vitamine_e: [false],
        epa_dha: [false],
        evening_primrose_gla: [false],
        calcium_source: [''],
        magnesium: [false],
        zinc: [false],
        minerals_describe: [''],
        friendly_flora: [false],
        digestive_enzymes: [false],
        amino_acids: [false],
        'CoQ10': [false],
        antioxidants: [false],
        herbs_teas: [false],
        herbs_extracts: [false],
        chinese_herbs: [false],
        ayurvedic_herbs: [false],
        homeopathy: [false],
        bach_flowers: [false],
        protein_shakes: [false],
        superfoods: [false],
        liquid_meals: [false],
        other: ['']
      }),
      goals: this._formBuilder.group({
        energy: [false],
        stronger: [false],
        endurance: [false],
        sex_drive: [false],
        thinner: [false],
        muscular: [false],
        complexion: [false],
        strong_nails: [false],
        healthier_hair: [false],
        less_moody: [false],
        less_depressed: [false],
        less_indecisive: [false],
        motivated: [false],
        organized: [false],
        think_clearly: [false],
        memory: [false],
        school: [false],
        over_the_counter: [false],
        laxatives: [false],
        pain_free: [false],
        sleep_better: [false],
        agreeable_breath: [false],
        agreeable_oder: [false],
        strong_teeth: [false],
        less_colds: [false],
        allergies: [false],
        inherited_disease: [false]
      })
    });
  }

  onSubmit() {
    console.log(this.healthHistoryForm.value);
    // this.userService.updateUser(this.healthHistoryForm.value);
    this.userService.createNewUser(this.healthHistoryForm.value);
  }

}
