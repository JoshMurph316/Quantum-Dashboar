import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaqFormComponent } from './haq-form.component';

describe('HaqFormComponent', () => {
  let component: HaqFormComponent;
  let fixture: ComponentFixture<HaqFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaqFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
