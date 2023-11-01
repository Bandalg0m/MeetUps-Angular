import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Meetup } from '../../entities/meetup';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupComponent implements OnInit {
  public isShort: boolean;
  public isUserSubbed = false;
  public isUserOwner = false;
  constructor() {
    this.isShort = true;
  }

  ngOnInit(): void {
    this.isUserSubbed = !!this.data.users.find((item) => item.id === this.currentUserId);
    this.isUserOwner = this.data.owner.id === this.currentUserId;
  }

  handleViewState() {
    this.isShort = !this.isShort;
  }

  @Input()
  data!: Meetup;

  @Input()
  currentUserId?: number | null;

  @Output() subscribeMeetup = new EventEmitter<number>();

  @Output() unsubscribeMeetup = new EventEmitter<number>();

  handleSubscribe() {
    if (!this.isUserSubbed) {
      this.subscribeMeetup.emit(this.data.id);
      this.isUserSubbed = !this.isUserSubbed;
    }
  }
  handleUnsubscribe() {
    if (this.isUserSubbed) {
      this.unsubscribeMeetup.emit(this.data.id);
      this.isUserSubbed = !this.isUserSubbed;
    }
  }
}
