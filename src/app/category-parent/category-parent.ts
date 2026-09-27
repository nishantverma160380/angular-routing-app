import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categories } from '../categories/categories';

import {
  CategoryAudience
} from '../models/categoryModel';

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

}