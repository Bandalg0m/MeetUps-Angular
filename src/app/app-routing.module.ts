import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AboutComponent } from './components/about/about.component';
import { MeetupsFeedComponent } from './components/meetups-feed/meetups-feed.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersComponent } from './components/users/users.component';
import { MeetupCreationComponent } from './components/meetup-creation/meetup-creation.component';
import { MeetupEditComponent } from './components/meetup-edit/meetup-edit.component';
import { MyMeetupsComponent } from './components/my-meetups/my-meetups.component';

const routes: Routes = [
  { path: '', redirectTo: 'meetups', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: 'meetups', component: MeetupsFeedComponent, canActivate: [AuthGuard] },
  { path: 'my-meetups', component: MyMeetupsComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'meetup-creation', component: MeetupCreationComponent, canActivate: [AuthGuard] },
  { path: 'meetup-edit', component: MeetupEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
