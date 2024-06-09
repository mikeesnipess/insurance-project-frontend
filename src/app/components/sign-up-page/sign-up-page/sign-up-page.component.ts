import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
})
export class SignUpPageComponent{
  //signUpForm: FormGroup;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  
  }

  onSubmit() {
    if (this.email && this.password) {
      this.authService.register({ email: this.email, password: this.password }).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    } else {
      console.error('Email and password are required');
    }
  }
}
