import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IMeetup } from '../../../utils/types/types';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';
import { Meetup } from '../../entities/meetup';

@Injectable()
export class MeetupsService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly refreshDataInterval: NodeJS.Timeout;
  public meetups$: BehaviorSubject<Meetup[]> = new BehaviorSubject([] as Meetup[]);

  constructor(private http: HttpClient) {
    this.getMeetups();
    this.meetups$.pipe(takeUntil(this.destroy$));
    this.refreshDataInterval = setInterval(() => this.getMeetups(), 10000);
  }

  public getMeetups() {
    return this.http
      .get<IMeetup[]>(`${environment.apiUrl}/meetup`)
      .pipe(
        takeUntil(this.destroy$),
        map((data) =>
          data.map(
            (item) =>
              new Meetup(
                item.id,
                item.name,
                item.description,
                item.location,
                item.target_audience,
                item.need_to_know,
                item.will_happen,
                item.reason_to_come,
                item.time,
                item.duration,
                item.createdBy,
                item.users,
                item.createdAt,
                item.owner
              )
          )
        )
      )
      .subscribe((value) => {
        this.meetups$.next(value);
      });
  }

  public subscribeUser(userId: number, meetupID: number) {
    this.http
      .put(`${environment.apiUrl}/meetup`, { idMeetup: meetupID, idUser: userId })
      .subscribe(() => this.getMeetups());
  }

  public unsubscribeUser(userId: number, meetupID: number) {
    this.http
      .delete(`${environment.apiUrl}/meetup`, {
        body: { idMeetup: meetupID, idUser: userId },
      })
      .subscribe(() => this.getMeetups());
  }

  ngOnDestroy() {
    clearInterval(this.refreshDataInterval);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
