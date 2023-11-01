import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MeetupsService } from '../../services/meetups/meetups.service';
import { Meetup } from '../../entities/meetup';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-meetups-feed',
  templateUrl: './meetups-feed.component.html',
  styleUrls: ['./meetups-feed.component.scss'],
  providers: [MeetupsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupsFeedComponent implements OnInit {
  public currentUserId: number | null;
  constructor(
    public meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.currentUserId = this.authService.userInfo?.id || null;
  }

  ngOnInit(): void {}

  subscribe(meetupId: number) {
    this.authService.userInfo?.id &&
      this.meetupsService.subscribeUser(this.authService.userInfo?.id, meetupId);
  }

  unsubscribe(meetupId: number) {
    this.authService.userInfo?.id &&
      this.meetupsService.unsubscribeUser(this.authService.userInfo?.id, meetupId);
  }

  trackByFn(index: number, item: Meetup) {
    return item.id;
  }
}
