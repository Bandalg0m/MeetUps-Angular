export interface IMeetup {
  id: number;
  name: string;
  description: string;
}

export interface IUser {
  email: string;
  id: number;
  roles: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    userRole: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
}
