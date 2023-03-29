import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/Profile/profile-header/profileHeader.component';
import { ProfileFooterComponent } from './components/Profile/profileFooter/profile-footer.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileFooterComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        LottieAnimationViewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
