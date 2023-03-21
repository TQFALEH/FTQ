import { Component, Input } from '@angular/core';

export interface user {
   name :string;
   hb1ac:number;
   meals:number;
   carbRatio:number;
   profileImage:string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
@Input() user: any 
}
