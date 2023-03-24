import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';


@Component({
  selector: 'app-profile-header',
  templateUrl: './profileHeader.component.html',
  styleUrls: ['./profileHeader.component.css']
})

export class UserComponent {
  // The profile will recive from parent array [name-hb1ac meals-carbRatio-profileImage-]
  profile: Profile[] = [{
    name: 'طارق',
    hb1ac: 8,
    meals: 41,
    carbRatio: 14,
    profileImage: 'https://pbs.twimg.com/media/FlHSUweXgAEtWX7.jpg'
  }]
}
