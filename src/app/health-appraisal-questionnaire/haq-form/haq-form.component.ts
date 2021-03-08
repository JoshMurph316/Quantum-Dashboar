import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HAQ, Part } from '../haq-form/haq-form.model';
import { UserService } from 'src/app/user/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user/user';
import { HealthAppraisalQuestionnaireService } from '../health-appraisal-questionnaire.service';

@Component({
  selector: 'app-haq-form',
  templateUrl: './haq-form.component.html',
  styleUrls: ['./haq-form.component.css']
})
export class HaqFormComponent implements OnInit, OnDestroy {
  isLinear = true;
  selectedIndex: number;
  panelOpenState = false;

  haqFormGroup: FormGroup;
  userFormData: HAQ = { parts: [] };
  userSubscription: Subscription;
  formData: Part[] = [];



  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private haqService: HealthAppraisalQuestionnaireService
    ) { }

  ngOnInit(): void {
    this.formData = this.haqService.getFormData();

    this.userSubscription = this.userService.userChanged.subscribe((user: User) => {

      this.userService.getUserDetails(user.$id);
      if(user.hasOwnProperty('haqForm')){

        this.userFormData = user.haqForm;
        // patch form data
        this.userFormData.parts.forEach((part, i) => {
          part.sections.forEach((section, j) => {
            section.values.forEach((value, x) => {
              (<FormGroup>(<FormGroup>this.haqFormGroup
                .controls['part'+(i+1)])
                .controls['section'+(j+1)])
                .controls[x]
                .patchValue(value.value);
            })
          });
        });
      } else {
        // new user
        this.formData.forEach(part => {
          this.userFormData.parts.push(part);
        });
      }
    });

    this.haqFormGroup = this.fb.group({
      part1: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0]
        }),
        section3: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0]
        }),
        section4: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0]
        }),
      }),
      part2: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0],
        })
      }),
      part3: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0]
        })
      }),
      part4: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0]
        })
      }),
      part5: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0]
        })
      }),
      part6: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0]
        }),
        section3: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0]
        }),
      }),
      part7: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0],
          16: [0],
          17: [0],
          18: [0],
          19: [0],
          20: [0],
          21: [0],
          22: [0],
          23: [0],
          24: [0],
          25: [0],
          26: [0],
          27: [0],
          28: [0],
          29: [0],
          30: [0]
        })
      }),
      part8: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0]
        })
      }),
      part9: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0]
        }),
        section3: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0]
        })
      }),
      part10: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0],
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0]
        })
      }),
      part11: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0]
        })
      }),
      part12: this.fb.group({
        section1: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0],
          16: [0],
          17: [0],
          18: [0],
          19: [0],
          20: [0],
          21: [0]
        }),
        section2: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0]
        }),
        section3: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0]
        }),
        section4: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0],
          15: [0],
          16: [0],
          17: [0]
        }),
        section5: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0]
        }),
        section6: this.fb.group({
          0: [0],
          1: [0],
          2: [0],
          3: [0],
          4: [0],
          5: [0],
          6: [0],
          7: [0],
          8: [0],
          9: [0],
          10: [0],
          11: [0],
          12: [0],
          13: [0],
          14: [0]
        })
      }),
    });

  }

  get controls() {
    return this.haqFormGroup.controls;
  }
  // programatic tab switch example
  selectTab(index: number): void {
    this.selectedIndex = index;
  }
  onSubmit(): void {
    this.calculateValues();
    // console.log(this.userFormData);
    this.userService.updateUser({ haqForm: this.userFormData } as User);
  }
  calculateValues(): void {
    Object.keys(this.haqFormGroup.value).forEach((part, i) => {
      Object.keys(this.haqFormGroup.value[part]).forEach((section, j) => {
        let sectionValue = 0;
        this.userFormData.parts[i].sections[j].values = [];

        Object.keys(this.haqFormGroup.value[part][section]).forEach(value => {
          // console.log(this.haqFormGroup.value[part][section][value]);
          this.userFormData.parts[i].sections[j].values.push(
            { value: this.haqFormGroup.value[part][section][value] }
          );
          sectionValue += Number(this.haqFormGroup.value[part][section][value]);
        });

        this.userFormData.parts[i].sections[j].sectionTotal = sectionValue;
      });
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
