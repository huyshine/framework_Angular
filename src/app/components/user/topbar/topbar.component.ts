import { Component, OnInit } from '@angular/core';
import { isAuthenticate } from 'src/app/ulits/authenticate';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    

  ) { }

  public authenticate = isAuthenticate();

  ngOnInit() {
    if (!localStorage.getItem("user")) return;
    return JSON.parse(localStorage.getItem("user") as string);
  }

  handleLogout = () => {
    localStorage.removeItem("user");
  }

  
  
  

}
