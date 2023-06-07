import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentionService } from 'src/app/API/Users/authention.service';
import { Router } from '@angular/router';

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
    private router: Router

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
        
        // toast.success("Logged in successfully");
        const roleId = response.data.role == "member" ? this.router.navigate(['/home']) : this.router.navigate(['/admin']);

        // Xử lý thành công, chẳng hạn chuyển hướng đến trang đăng nhập
      },
      (error) => {
        console.log('Login failed');
        // Xử lý lỗi, hiển thị thông báo lỗi cho người dùng
      }
    );
  }




}
