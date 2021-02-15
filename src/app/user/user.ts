export interface User {
  $id?: string;
  name?: string;
  email: string;
  dateOfBirth?: string;
  dateOfForm?: string;
  occupation?: string;
  age?: number;
  height?:string;
  sex?:string;
  numberOfChildren?: string;
  maritalStatus?:string;
  fluStatus?: string;
  pregnant?: string;
  reasonForVisit?: string;
  dateLastExam?:string;
  practitioner?: {
    name?: string;
    number?: string;
  }
  labs?: string;
  outcome?:string;
  therapy?: {
    diet_modification?: string;
    fasting?: string;
    vitamins_minerals?: string;
    herbs?: string;
    homeopathy?: string;
    chiropractic?: string;
    acupuncture?: string;
    conventional_drugs?: string;
    other?: string;
  },
  healthProblems?:string;
  medications?:string;
  major?: {
    year?: string;
    operation?: string;
    outcome?: string;
  };
  stressLevel?: string;
  stressCause?:string;
  weightClass?:string;
  weight?: string;
  weightLoss?: string;
  chemicalHandling?:string;
  medicalDevices?: {
    corrective_lenses?: string;
    dentures?: string;
    heaing_aid?: string;
    other?: string;
  }
  abilityChanges?: {
    see?: string;
    hear?: string;
    taste?: string;
    smell?: string;
    feel?: string;
    move?: string;
  }
  flavorLikes?: {
    sour?: string;
    bitter?: string;
    sweet?: string;
    rich_fatty?: string;
    spicy_pungent?: string;
    salty?: string;
  }
  flavorDislikes?: {
    sour?: string;
    bitter?: string;
    sweet?: string;
    rich_fatty?: string;
    spicy_pungent?: string;
    salty?: string;
  }
  tempPreference?: string;
  disturbedSleep?: string;
  leastSymptomTime?: {
    start?: string;
    end?: string;
  }
  mostSymptomTime?: {
    start?: string;
    end?: string;
  }
}





//   dailySymptoms: [null, Validators.required],
//   medicalHistory: [null, Validators.required],
//   familyHistroy: [null, Validators.required],
//   healthHabits: [null, Validators.required],
//   exercise: [null, Validators.required],
//   nutrition: [null, Validators.required],
//   foodFrequency: [null, Validators.required],
//   eatingHabits: [null, Validators.required],
//   supplements: [null, Validators.required],
//   goals: [null, Validators.required]

// active?: boolean;
// timeStamp?: string;
// sessions?: number;
// f_name?: string;
// l_name?: string;
// b_day?: string;
// email?: string;
// phone?: string;
// questions?: {
//     root_canal?: boolean;
//     mold?: boolean;
//     missing_organs?: boolean;
//     tap_water?: boolean;
//     alcohol?: boolean;
//     c_section?: boolean;
//     birth_control?: boolean;
//     implants?: boolean;
//     uti?: boolean;
//     mercury_fillings?: boolean;
//     surgeries?: boolean;
//     botox?: boolean;
//     emf?: boolean;
// };
// lifestyle?: {
//     water?: string[];
//     exercise?: string[];
//     work?: string[];
//     stress?: string[];
//     sleep?: string[];
// }
// history?: string[];
// symptoms?: string[];
// medications?: string[];
// supplements?: string[];
// conductivity?: number;
// left_spin?: boolean;
// biotoxicosis?: string;
// findings?: string[];
// diet?: string[];
// detox?: string[];
// food_restrictions?: string[];
// remedy_suggestions?: Array<string[]>;
// notes?: string[];
