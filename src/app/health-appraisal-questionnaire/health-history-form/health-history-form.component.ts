import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question/question-base';
import { QuestionControlService } from '../question/question-control.service';
import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-health-history-form',
  templateUrl: './health-history-form.component.html',
  styleUrls: ['./health-history-form.component.css'],
  providers: [ QuestionControlService ]
})
export class HealthHistoryFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private qs: QuestionService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
