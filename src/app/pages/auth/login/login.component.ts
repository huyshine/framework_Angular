import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentionService } from 'src/app/API/Users/authention.service';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

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

  
  constructor(
    private authService: AuthentionService,
    private router: Router,
    private toastService: ToastService,


     ) { }

     

  onSubmit() {
    // console.log('Registration submitted:', this.credentials);
    // Goi API

    this.authService.signin(this.credentials).subscribe(

      
      (response) => {

        this.authService.setTocken(response.accessToken);
        console.log(this.authService.getTocken());
        
        console.log('Login successful');
        localStorage.setItem("user", JSON.stringify(response));
        this.toastService.success("Logged in successfully");
        
        // toast.success("Logged in successfully");
        // const roleId = ;
        setTimeout(() => response.data.role == "member" ? this.router.navigate(['/home']) : this.router.navigate(['/admin']), 2000);

        // Xử lý thành công, chẳng hạn chuyển hướng đến trang đăng nhập
      },
      (error) => {
        // console.log('Login failed');
        this.toastService.error("Error! Incorrect account or password");

        // Xử lý lỗi, hiển thị thông báo lỗi cho người dùng
      }
    );
  }




}
