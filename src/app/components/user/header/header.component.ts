
import { Component } from '@angular/core';
import { isAuthenticate } from 'src/app/ulits/authenticate';
import { Router } from '@angular/router';
import { DataService } from 'src/app/API/data/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  totalQuantity : number = 0 ;

  constructor(
    
    private router : Router,
    private data : DataService

    ) { }
  
    public authenticate = isAuthenticate();
    public handleLogout = () => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    }
    
  
    ngOnInit() {
      this.data.getData.subscribe((res : any) => {
        this.totalQuantity = res.quantity
        
      })
      if (!localStorage.getItem("user")) return;
      return JSON.parse(localStorage.getItem("user") as string);
    }

}
