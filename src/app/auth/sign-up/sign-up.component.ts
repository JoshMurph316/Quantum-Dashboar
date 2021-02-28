import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit() {

    if(this.signUpForm.valid) {
      this.auth.registerNewUser(this.signUpForm.value);
    } else {
      alert("Invalid credentials");
    }
  }
}
