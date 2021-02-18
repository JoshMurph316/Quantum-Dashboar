import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  myForm: FormGroup;

  toppingsControl = new FormControl([]);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // used to display chip
  user_chips: {
    'history':  string[],
    'symptoms': string[],
    'medications': string[],
    'supplements': string[],
    'findings': string[],
    'diet': string[],
    'detox': string[],
    'food_restrictions': string[],
    'remedy_suggestions': string[],
    'notes': string[],
    'water': string[],
    'exercise': string[],
    'work': string[],
    'stress': string[],
    'sleep': string[],
    'biotoxicosis': string[]
}

  // options
  common_options: {
    'findings': string[],
    'diet': string[],
    'detox': string[],
    'food_restrictions': string[],
    'biotoxicosis': string[]
  }

  // icons
  faTimesCircle = faTimesCircle;

  // chip input controls
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private fb: FormBuilder,
    private usrSvc: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.user_chips = {
      history:  [],
      symptoms: [],
      medications: [],
      supplements: [],
      findings: [],
      diet: [],
      detox: [],
      food_restrictions: [],
      remedy_suggestions: [],
      notes: [],
      water: [],
      exercise: [],
      work: [],
      stress: [],
      sleep: [],
      biotoxicosis: []
    }

    // TODO: add these to data and create form for additions
    this.common_options = {
      'findings': ['Candida', 'Parasite', 'HRV', 'Pylori', 'Mold', 'Aflatoxin', 'Glyphosate', 'MTHFR', 'Heavy Metal', 'Prostate & Candida', 'Xenoestrogens', 'Left Spin'],
      'diet': ['Keto', 'Paleo', 'Antifungal P1', 'Antifungal P2', 'FST' ],
      'detox': ['Liver/Gallbladder Flush', 'Breath Work', 'Coffee Enema', 'Infrared Yoga', 'Infrared Sauna', 'PEMF', 'Oil Pullings', 'Dry Brushing', 'Hot/Cold Exposure'],
      'food_restrictions': ['Gluten', 'Sugar', 'Lactose(Dairy)', 'Stimulants', 'Lectins', 'Alcohol'],
      'biotoxicosis': ['Lymph 1', 'Lymph 2', 'Lymph 3']
    }

    this.myForm = this.fb.group({
      'active': true,
      'timeStamp': new Date(),
      'sessions': 1,
      'f_name': '',
      'l_name': '',
      'b_day': new Date(),
      'email': '',
      'phone': '',
      'questions': this.fb.group({
        'root_canal': false,
        'mold': false,
        'missing_organs': false,
        'tap_water': false,
        'alcohol': false,
        'c_section': false,
        'birth_control': false,
        'implants': false,
        'uti': false,
        'mercury_fillings': false,
        'surgeries': false,
        'botox': false,
        'emf': false
      }),
      'lifestyle': this.fb.group({
        'water': [],
        'exercise': [],
        'work': [],
        'stress': [],
        'sleep': []
      }),
      'conductivity': 0,
      'left_spin': false,
      'biotoxicosis': '',
      'history': [],
      'symptoms': [],
      'medications': [],
      'supplements': [],
      'findings': [],
      'diet': [],
      'detox': [],
      'food_restrictions': [],
      'remedy_suggestions': [],
      'notes': []
    });

  }

  add(event: MatChipInputEvent, list:string): void {
    const input = event.input;
    const value = event.value;

    // Add our history
    if ((value || '').trim()) {
      this.user_chips[list].push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(item, list:string): void {
    const index = this.user_chips[list].indexOf(item);

    if (index >= 0) {
      this.user_chips[list].splice(index, 1);
    }
  }

  // TODO: Split the form into pre and post process (Save then update)

  onSubmit() {
    for (const item in this.user_chips) {
      this.myForm.value[item] = this.user_chips[item]
    }

    this.usrSvc.createNewUser(this.myForm.value);
    this.router.navigate(['users']);
  }

}
