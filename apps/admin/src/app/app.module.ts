import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { DashbaordComponent } from './pages/dashbaord/dashbaord.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';

const PRIME_NG_MODULES = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  TableModule,
  InputTextModule,
  ColorPickerModule,
];

@NgModule({
  declarations: [
    AppComponent,
    DashbaordComponent,
    ShellComponent,
    SidebarComponent,
    FooterComponent,
    CategoryListComponent,
    CategoryFormComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    PRIME_NG_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
