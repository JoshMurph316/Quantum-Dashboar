import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAppraisalQuestionnaireComponent } from './health-appraisal-questionnaire.component';

describe('HealthAppraisalQuestionnaireComponent', () => {
  let component: HealthAppraisalQuestionnaireComponent;
  let fixture: ComponentFixture<HealthAppraisalQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthAppraisalQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthAppraisalQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
