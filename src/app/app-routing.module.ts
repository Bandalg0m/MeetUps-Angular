import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MeetupComponent } from './components/meetup/meetup.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'meetups', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'meetups', component: MeetupComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
