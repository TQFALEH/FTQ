import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/Profile/profile-header/profileHeader.component';
import { ProfileFooterComponent } from './components/Profile/profileFooter/profile-footer.component';
import { ProfileComponent } from './components/Profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileFooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
