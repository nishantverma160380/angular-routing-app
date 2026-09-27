import { Category } from './category';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  categories: Category[];
}