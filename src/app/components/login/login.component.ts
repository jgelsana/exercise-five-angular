import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  loginForm: FormGroup;
  wrongPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginUser() {
    const {email, password} = this.loginForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if(response.length > 0 && response[0].password === password) {
          localStorage.setItem('email', email as string)
          this.router.navigate(['/blog']);
        } else {
          this.wrongPassword = true;
          setTimeout(() => {
            this.wrongPassword = false;
          }, 3000);
        }
      }
    )
  }

}
