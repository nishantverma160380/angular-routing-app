export type CategoryAudience =
  'Male' |
  'Female' |
  'Unisex';

export interface Category {
  id: number;
  name: string;
  description: string;
  audience: CategoryAudience[];
}