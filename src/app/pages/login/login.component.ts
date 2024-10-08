import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  /**
   *
   */
  constructor(public formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }

  get dadosForm() {
    return this, this.loginForm.controls;
  }

  loginUser() {
    this.loginService.login(
      this.dadosForm["email"].value,
      this.dadosForm['senha'].value).subscribe(
        token => {
          // alert("Token: " + token);

          this.router.navigate(['/dashboard']);
        },
        err => {
          alert("Ocorreu um erro!");
        }
      )
  }
}