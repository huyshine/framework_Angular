import { Component } from '@angular/core';
import { AuthentionService } from 'src/app/API/Users/authention.service';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent  {

  credentials = {
    name: '',
    email: '',
    password: '',
    confirmPassword : '',
  };

  constructor(
    private authService: AuthentionService,
    private toastService: ToastService,
    private router : Router,

    
    ) { }

  onSubmit() {
    // console.log('Registration submitted:', this.credentials);
    // Goi API

    this.authService.register(this.credentials).subscribe(
      (response) => {
        // console.log('Register successful');
        // localStorage.setItem("user", JSON.stringify(this.credentials));
        this.toastService.success(
          "Successful account registration, redirect after 3 seconds"
        );
        // reset();
        setTimeout(() => this.router.navigate(["/login"]), 3000);
      },
      (error) => {
        this.toastService.error("Error! Please try again later.");
        // Xử lý lỗi, hiển thị thông báo lỗi cho người dùng
      }
    );
  }

}
