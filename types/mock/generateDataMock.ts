import { v4 as uuidv4 } from 'uuid';

import { Recipe } from '../Recipe';
import { User } from '../User';

type UserBuildObject = {
  id?: string;
  name?: string;
  joinDate?: Date;
};
export const generateUser = (userBuildObject?: UserBuildObject): User  => {
  const mockId = uuidv4();

  const mockData: User = {
    id: mockId,
    name: `mock user ${mockId}`,
    joinDate: new Date()
  };

  const { id, name, joinDate } = userBuildObject || {} as any;
  if (id) mockData.id = id;
  if (name) mockData.name = name;
  if (joinDate) mockData.joinDate = joinDate;

  return mockData;
};

type RecipeBuildObject = {
  id?: string;
  name?: string;
  summary?: string;
  publishDate?: Date;
  updateDate?: Date;
  content?: string;
  author?: User;
}
export const generateRecipe = (recipeBuildObject?: RecipeBuildObject): Recipe => {
  const mockId = uuidv4();

  const mockData: Recipe = {
    id: mockId,
    name: `mock recipe ${mockId}`,
    publishDate: new Date(),
    updateDate: new Date(),
    summary: 'mock summary',
    content: 'mock content',
    author: generateUser()
  };

  const { id, name, publishDate, updateDate, summary, content, author } = recipeBuildObject || {} as any;
  if (id) mockData.id = id;
  if (name) mockData.name = name;
  if (publishDate) mockData.publishDate = publishDate;
  if (updateDate) mockData.updateDate = updateDate;
  if (summary) mockData.summary = summary;
  if (content) mockData.content = content;
  if (author) mockData.author = author;

  return mockData;
};