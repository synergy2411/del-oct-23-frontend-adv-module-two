import { IComment } from "./comment.interface";

export interface IUser {
  firstName: string;
  lastName: string;
  income: number;
  isWorking: boolean;
  company: string;
  dob: Date;
  img: string;
  votes: number;
  comments: Array<IComment>
}
