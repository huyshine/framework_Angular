import { Component } from '@angular/core';
import { User } from './common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frameword_Angular';
  user : User[] = [
    {
      id: 1,
      name: 'Nguyen Van A',
      age: 20,
      dress: "Nam Định",
      role: 1
    },
    {
      id: 2,
      name: 'Nguyễn Quốc Huy',
      age: 20,
      dress: "Nam Định",
      role: 1
    },
    {
      id: 3,
      name: 'Nguyễn Van B',
      age: 20,
      dress: "Nam Định",
      role: 1
    }
  ]
}