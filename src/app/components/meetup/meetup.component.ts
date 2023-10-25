import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss'],
})
export class MeetupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  name?: string;

  @Input()
  description?: string;
}
