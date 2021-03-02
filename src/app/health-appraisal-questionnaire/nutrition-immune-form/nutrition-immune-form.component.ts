import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { NutritionImmune } from './nutrition-immune.model';

@Component({
  selector: 'app-nutrition-immune-form',
  templateUrl: './nutrition-immune-form.component.html',
  styleUrls: ['./nutrition-immune-form.component.css']
})
export class NutritionImmuneFormComponent implements OnInit {

  niForm: FormGroup;
  niFormOptions = {
    title: 'Nutrition & Immune Status',
    instructions: 'Physical assessment of common markers of malnutrition, maldigestion, malabsorption, hypermetabolic stress syndrome and protein calorie malnutrition. Exam to be conducted by a healthcare professional.',
    sections: [
      {
        key: 0,
        title: 'General Appearance',
        options: ['Undernourished, skinny (especially the temporal muscles)']
      },
      {
        key: 1,
        title: 'Hair',
        options: ['Dull, dry', 'Thin, fine, straight', 'Easily plucked', 'Areas of lighter or darker spots', 'Hair loss']
      },
      {
        key: 2,
        title: 'Face',
        options: ['Pale complexion','Generalized swelling','Dark areas on cheeks', 'Dark circles under eyes', 'Lumpy or flaky skin around the nose and mouth', 'Enlarged parotid glands']
      },
      {
        key: 3,
        title: 'Eyes',
        options: ['Difficulty adjusting to the dark', 'Dull appearance', 'Dry and either pale or red membranes', 'Triangular, shiny gray spots on conjunctivas', 'Red and fissured eyelid corners', 'Bloodshot ring around cornea']
      },
      {
        key: 4,
        title: 'Lips',
        options: ['Red and swollen, especially at corners', 'Cheilosis (fissures and chapping of lips)']
      },
      {
        key: 5,
        title: 'Tongue',
        options: ['Swollen', 'Purple and raw-looking with sores and abnormal papillae']
      },
      {
        key: 6,
        title: 'Teeth',
        options: ['Missing, or emerging abnormally', 'Visible cavities or dark spots', 'Bleeding gums ']
      },
      {
        key: 7,
        title: 'Nails',
        options: ['Spoon-shaped', 'Brittle', 'Ridged']
      },
      {
        key: 8,
        title: 'Neck',
        options: ['Swollen thyroid gland']
      },
      {
        key: 9,
        title: 'Skin',
        options: ['Dry, flaky', 'Swollen, with lighter and darker spots, some resembling bruises', 'Tight and drawn, with poor turgor (elasticity)', 'Dermatitis', 'Retarded wound healing', 'Skin lesions']
      },
      {
        key: 10,
        title: 'Smell and Taste',
        options: ['Partial loss of taste', 'Partial loss of smell']
      },
      {
        key: 11,
        title: 'Musculoskeletal System',
        options: ['Muscle wasting', 'Muscle weakness', 'Muscle atrophy', 'Knock-knee or bowlegs', 'Bumps on ribs', 'Swollen joints', 'Musculoskeletal hemorrhages', 'Stunted growth, loss of height', 'Dowager’s hump', 'Tetany (muscle twitches and/or cramps)']
      },
      {
        key: 12,
        title: 'Cardiovascular System',
        options: ['Heart rate above 100 beats/minute', 'Arrythmias', 'Elevated blood pressure']
      },
      {
        key: 13,
        title: 'Abdomen',
        options: ['Enlarged liver and spleen']
      },
      {
        key: 14,
        title: 'Reproductive System',
        options: ['Decreased libido', 'Amenorrhea', 'Retarded development of the reproductive system']
      },
      {
        key: 15,
        title: 'Nervous System',
        options: ['Irritability', 'Mental confusion', 'Abnormal behavior', 'Depression', 'Paresthesias (tingling) in hands and feet', 'Loss of proprioception (unable to maintain balance with eyes closed)', 'Decreased ankle and knee reflexes', 'Paralysis (no spinal cord injury)', 'Tremor']
      },
      {
        key: 16,
        title: 'Consider blood deficiency (pernicious anemia) with the following clinical picture',
        options: ['Considerable weight loss without apparent cause', 'Burning tongue', 'General weakness, malaise and fatigue', 'Numbness and tingling in the extremities', 'Alternating constipation and diarrhea', 'Abdominal pain', 'Nausea and vomiting', 'Bleeding gums', 'Ataxia (incoordination and irregularity of voluntary, purposeful movements)', 'Diplopia (double vision) and blurred vision', 'Irritability', 'Headache']
      },
      {
        key: 17,
        title: 'Ethnic Background',
        options: ['White (non-Hispanic origin)', 'Hispanic', 'African American', 'Asian', 'Pacific Islander', 'Native North American', 'East Indian']
      }
    ]
  }

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.niForm = this.fb.group({
      section0: this.fb.group({
        0: [false]
      }),
      section1: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false]
      }),
      section2: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false]
      }),
      section3: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false]
      }),
      section4: this.fb.group({
        0: [false],
        1: [false]
      }),
      section5: this.fb.group({
        0: [false],
        1: [false]
      }),
      section6: this.fb.group({
        0: [false],
        1: [false],
        2: [false]
      }),
      section7: this.fb.group({
        0: [false],
        1: [false],
        2: [false]
      }),
      section8: this.fb.group({
        0: [false]
      }),
      section9: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false]
      }),
      section10: this.fb.group({
        0: [false],
        1: [false]
      }),
      section11: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false],
        6: [false],
        7: [false],
        8: [false],
        9: [false]
      }),
      section12: this.fb.group({
        0: [false],
        1: [false],
        2: [false]
      }),
      section13: this.fb.group({
        0: [false]
      }),
      section14: this.fb.group({
        0: [false],
        1: [false],
        2: [false]
      }),
      section15: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false],
        6: [false],
        7: [false],
        8: [false]
      }),
      section16: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false],
        6: [false],
        7: [false],
        8: [false],
        9: [false],
        10: [false],
        11: [false]
      }),
      section17: this.fb.group({
        0: [false],
        1: [false],
        2: [false],
        3: [false],
        4: [false],
        5: [false],
        6: [false]
      })
    });
  }

  populateFormValues(): NutritionImmune {
    let formData = this.niForm.value;
    this.niFormOptions.sections.forEach((section, i) => {
      section.options.forEach((option, j) => {
        formData['section'+i][option] = formData['section'+i][j];
        delete formData['section'+i][j];
      });
    });
    console.log(formData);
    return formData;
  }

  onSubmit() {
    let payload = this.populateFormValues();
    this.userService.updateUser({nutritionImmune: payload })
  }

}
