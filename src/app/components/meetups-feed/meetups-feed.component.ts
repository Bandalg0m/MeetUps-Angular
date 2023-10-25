import { Component, OnInit } from '@angular/core';
import { MeetupsService } from '../../services/meetups/meetups.service';

@Component({
  selector: 'app-meetups-feed',
  templateUrl: './meetups-feed.component.html',
  styleUrls: ['./meetups-feed.component.scss'],
})
export class MeetupsFeedComponent implements OnInit {
  constructor(public meetupsService: MeetupsService) {}

  ngOnInit(): void {}
}
