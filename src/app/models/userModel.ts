import { Category } from './categoryModel';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  categories: Category[];
}