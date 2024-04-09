import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { register } from 'module';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../user/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    name: [''],
    email: [''],
    bio: [''],
    password: [''],
    confirmPassword: ['']
  }, {
    validators: passwordMatchValidator
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    
  }

  get name() {
    return this.registerForm.controls['name'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get bio() {
    return this.registerForm.controls['bio'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  onSubmit() {
    if(this.registerForm.valid) {
      const postedData = {...this.registerForm.value};
      delete postedData.confirmPassword;
      this.authService.registerUser(postedData as User).subscribe(
        response => {
          console.log(response),
          this.router.navigate(['login']);
        },
        error => console.log(error)
      )
    }
  } 
}
