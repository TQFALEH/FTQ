import { Component } from '@angular/core';
import { user } from './components/user/user.component';

var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sugerMoger';

  users: any = [
    {
      name: 'طارق',
      hb1ac: 8,
      meals: 411,
      carbRatio: 14,
      profileImage: 'https://pbs.twimg.com/media/FlHSUweXgAEtWX7.jpg',
    },

    {
      name: 'فهد',
      hb1ac: 8,
      meals: 11,
      carbRatio: 11,
      profileImage:
        'https://preview.redd.it/inspired-by-the-office-as-pixar-characters-i-present-v0-3yylgmp36g0a1.png?auto=webp&s=de260e88e30e84c463c359c298e985aa0f62cf54',
    },
    {
      name: 'ابتسام',
      hb1ac: 6,
      meals: 21,
      carbRatio: 14,
      profileImage:
        'https://preview.redd.it/friends-cast-as-pixar-characters-v0-k1iotifsg0ka1.png?width=640&crop=smart&auto=webp&s=e0ef52508da8c1332ab85a01e6b1b423d91bf43b',
    },
    {
      name: 'سارة',
      hb1ac: 8,
      meals: 411,
      carbRatio: 14,
      profileImage:
        'https://preview.redd.it/friends-cast-as-pixar-characters-v0-bewf4kfsg0ka1.png?width=640&crop=smart&auto=webp&s=05d3f61fa6d30e4bd4a850463085f2f6456f7a51',
    },
  ];
}
