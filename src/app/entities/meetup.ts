import { IUserInfo } from '../../utils/types/types';

export class Meetup {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public location: string,
    public target_audience: string,
    public need_to_know: string,
    public will_happen: string,
    public reason_to_come: string,
    public time: string,
    public duration: number,
    public createdBy: number,
    public users: IUserInfo[],
    public createdAt: string,
    public owner: IUserInfo
  ) {}
}
