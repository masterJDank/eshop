import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Replace the following with your authentication logic
      if (username === 'admin' && password === 'admin') {
        // Navigate to the admin dashboard or appropriate route
        this.router.navigate(['/admin-dashboard']);
      } else {
        alert('Invalid username or password');
      }
    }
  }

}
