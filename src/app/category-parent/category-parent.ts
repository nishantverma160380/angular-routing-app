import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categories } from '../categories/categories';

import { Category, CategoryAudience } from '../models/categoryModel';
import { CategoriesService } from '../services/categoriesService';

@Component({
  selector: 'app-category-parent',
  standalone: true,
  imports: [
    CommonModule,
    Categories
  ],
  templateUrl: './category-parent.html',
  styleUrl: './category-parent.scss'
})
export class CategoryParent {

  mainCategories: CategoryAudience[] = [
    'Male',
    'Female',
    'Unisex'
  ];
  categories: Category[] = [];
  private categoriesService = inject(CategoriesService);

  constructor() {
    this.categoriesService.getCategoryData().subscribe((categories) => {
      this.categories = categories;
    });
  }

}