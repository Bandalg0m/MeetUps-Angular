import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupCreationComponent } from './meetup-creation.component';

describe('MeetupCreationComponent', () => {
  let component: MeetupCreationComponent;
  let fixture: ComponentFixture<MeetupCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
