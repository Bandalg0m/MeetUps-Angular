import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupEditComponent } from './meetup-edit.component';

describe('MeetupEditComponent', () => {
  let component: MeetupEditComponent;
  let fixture: ComponentFixture<MeetupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetupEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
