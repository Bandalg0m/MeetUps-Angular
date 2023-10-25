export class Meetup {
  constructor(
    private id: number,
    private name: string,
    private description: string
  ) {}

  get MeetupId() {
    return this.id;
  }
  get MeetupName() {
    return this.name;
  }
  get MeetupDescription() {
    return this.description;
  }
}
