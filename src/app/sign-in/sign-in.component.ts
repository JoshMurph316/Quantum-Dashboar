import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  onSubmit() {
    // if(this.signInForm.value)
    if(this.signInForm.value.password == '123') {
      this.router.navigate(['/dashboard']);
    } else {
      alert("incorrect password");
    }
  }

}
