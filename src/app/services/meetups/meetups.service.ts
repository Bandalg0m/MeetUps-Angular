import { Injectable } from '@angular/core';
import { Meetup } from '../../entities/meetup';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  public meetupOne = new Meetup(1, 'name1', 'desc1');
  public meetupTwo = new Meetup(2, 'name2', 'desc2');
  public meetupThree = new Meetup(3, 'name3', 'desc3');
  public sourceData = [this.meetupOne, this.meetupTwo, this.meetupThree];

  constructor() {}
}
