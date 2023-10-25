import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupsFeedComponent } from './meetups-feed.component';

describe('MeetupsFeedComponent', () => {
  let component: MeetupsFeedComponent;
  let fixture: ComponentFixture<MeetupsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupsFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
