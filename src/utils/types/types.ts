export interface IUserInfo {
  id: number;
  email: string;
  password: string;
  fio: string;
}

export interface IRole {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  email: string;
  id: number;
  roles: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    userRole: IRole;
  }[];
}

export interface IMeetup {
  id: number;
  name: string;
  description: string;
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: string;
  duration: number;
  createdBy: number;
  createdAt: string;
  owner: IUserInfo;
  users: IUserInfo[];
}
