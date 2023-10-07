import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { productsRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes), RouterModule],
})
export class ProductsModule {}
