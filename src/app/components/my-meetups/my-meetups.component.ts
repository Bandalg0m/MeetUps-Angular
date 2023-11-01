import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../../services/meetups/meetups.service';
import { Meetup } from '../../entities/meetup';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss'],
  providers: [MeetupsService],
})
export class MyMeetupsComponent implements OnInit {
  public currentUserId: number | null;
  constructor(
    public meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.currentUserId = this.authService.userInfo?.id || null;
  }

  ngOnInit(): void {}

  trackByFn(index: number, item: Meetup) {
    return item.id;
  }
}
