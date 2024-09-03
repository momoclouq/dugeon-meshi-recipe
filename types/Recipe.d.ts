import { User } from './User';

export type Recipe = {
  id: string;
  name: string;
  publishDate: Date;
  updateDate: Date;
  summary: string;
  content: string;
  author: User;
};