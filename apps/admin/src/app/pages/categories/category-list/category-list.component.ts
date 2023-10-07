import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@ecommerce/products';

@Component({
  selector: 'admin-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [
    // { id: 1, name: 'Cat 1', icon: 'pi pi-truck', color: '#FFFFFF' },
    // { id: 2, name: 'Cat 2', icon: 'pi pi-home', color: '#FF0000' },
    // { id: 3, name: 'Cat 3', icon: 'pi pi-trash', color: '#00ff00' },
    // { id: 4, name: 'Cat 4', icon: 'pi pi-wallet', color: '#0000ff' },
  ];

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }
}
