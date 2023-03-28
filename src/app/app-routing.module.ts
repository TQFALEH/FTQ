import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/Profile/profile-header/profileHeader.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'',redirectTo:'HomeComponent',pathMatch:'full'},
  { path: 'profile', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
