import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/Profile/profile-header/profileHeader.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'profile', component: UserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
