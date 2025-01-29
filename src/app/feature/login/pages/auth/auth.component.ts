import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material-module';
import { UserHttpService } from 'src/app/shared/services/login-services';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/shared/dto/login-dto';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userHttpService: UserHttpService,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    debugger;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const request = new LoginDto();
      request.email = formData['email'];
      request.password = formData['password'];
      this.userHttpService.getByUserAndPassword(request).subscribe({
        next: () => {
            this.router.navigate(['user/create']);
        },
        error: () => {

        }
      })

    } else {
      console.log('Formulario no válido');
    }
  }
}