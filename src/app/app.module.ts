import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetupComponent } from './components/meetup/meetup.component';
import { MeetupsFeedComponent } from './components/meetups-feed/meetups-feed.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { NgOptimizedImage } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MeetupComponent,
    MeetupsFeedComponent,
    HeaderComponent,
    AuthComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
