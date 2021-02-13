import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionImmuneFormComponent } from './nutrition-immune-form.component';

describe('NutritionImmuneFormComponent', () => {
  let component: NutritionImmuneFormComponent;
  let fixture: ComponentFixture<NutritionImmuneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionImmuneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionImmuneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
