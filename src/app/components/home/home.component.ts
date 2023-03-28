import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: 'assets/pinjump.json',
          renderer: 'canvas',
          autoplay: true,
          loop: true
      };
  }

  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }
}
