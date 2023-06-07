import { Component } from '@angular/core';
import { AuthentionService } from 'src/app/API/Users/authention.service';

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

  constructor(private authService: AuthentionService) { }

  onSubmit() {
    // console.log('Registration submitted:', this.credentials);
    // Goi API

    this.authService.register(this.credentials).subscribe(
      (response) => {
        console.log('Register successful');
        localStorage.setItem("user", JSON.stringify(this.credentials));
        // Xử lý thành công, chẳng hạn chuyển hướng đến trang đăng nhập
      },
      (error) => {
        console.log('Register failed');
        // Xử lý lỗi, hiển thị thông báo lỗi cho người dùng
      }
    );
  }

}
