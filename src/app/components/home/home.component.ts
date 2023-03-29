import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;
  constructor(private route: Router) {
    this.lottieConfig = {
      path: './sukarah.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    }
  }
  signUp() {
    this.route.navigate(['signup'])
  }
  login() {
    this.route.navigate(['login'])
  }
}
