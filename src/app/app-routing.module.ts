import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AboutComponent } from './components/about/about.component';
import { MeetupsFeedComponent } from './components/meetups-feed/meetups-feed.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersComponent } from './components/users/users.component';
import { MeetupCreationComponent } from './components/meetup-creation/meetup-creation.component';
import { MeetupEditComponent } from './components/meetup-edit/meetup-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'meetups', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'meetups', component: MeetupsFeedComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'meetup-creation', component: MeetupCreationComponent },
  { path: 'meetup-edit', component: MeetupEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
