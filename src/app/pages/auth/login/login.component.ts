import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Login submitted:', this.credentials);
    // Goi API
  }

}
