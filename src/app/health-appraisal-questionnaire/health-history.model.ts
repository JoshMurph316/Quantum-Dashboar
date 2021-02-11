export interface HealthHistory {
  $id?: string;
  name: string;
  dateOfBirth: string;
  dateOfForm: string; // new Date
  occupation: string;
  age: number; // could be calculated from dateOfBirth
  height: string;
  sex: string;
  numberOfChildren: number;
  maritalStatus: string;
  fluStatus: boolean;
  pregnant: boolean;
  reasonForVisit: {reason: string, startDate: string};
  dateLastExam: string;
  practitioner: {name: string, phone: string}
  labs: string;
  outcome: string;
  therapy: string[];
  healthProblems: string[];
  medications: string[];
  major: {year: number, event: string, outcome: string}
  stressLevel: number;
  stressCause: string;
  weightClass: string;
  weight: string;
  weightLoss: boolean;
  chemicalHandling: string;
  medicalDevices: string[];
  abilityChanges: string[];
  flavorLikes: string[];
  flavorDislikes: string[];
  tempPreference: string;
  disturbedSleep: {value: boolean, time: string}
  leastSymptomTime: string;
  mostSymptomTime: string;
  dailySymptoms: string[];
  medicalHistory: string[];
  familyHistroy: string[];
  healthHabits: string[];
  exercise: string[];
  nutrition: string[];
  foodFrequency: string[];
  eatingHabits: string[];
  supplements: string[];
  goals: string[];
}
