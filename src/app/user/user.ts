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
