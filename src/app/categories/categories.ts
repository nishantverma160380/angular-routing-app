import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Category, CategoryAudience } from '../models/categoryModel';

@Component({
  imports: [CommonModule],
  selector: 'app-categories',
  standalone: true,
  styleUrl: './categories.scss',
  templateUrl: './categories.html',
})

export class Categories {
  @Input() sex!: CategoryAudience;
  @Input() categories: Category[] = [];

  getFilteredCategories(): Category[] {
    return this.categories.filter(
      category => 
        category.audience.includes(this.sex));
  }
}