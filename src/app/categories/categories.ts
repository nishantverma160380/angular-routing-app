import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Category, CategoryAudience } from '../models/categoryModel';
import { clothingCategories } from '../data/clothing-categories-data';

@Component({
  imports: [CommonModule],
  selector: 'app-categories',
  standalone: true,
  styleUrl: './categories.scss',
  templateUrl: './categories.html',
})

export class Categories {
  @Input() sex!: CategoryAudience;
  categories: Category[] = clothingCategories;

  getFilteredCategories(): Category[] {
    return this.categories.filter(
      category => 
        category.audience.includes(this.sex));
  }
}