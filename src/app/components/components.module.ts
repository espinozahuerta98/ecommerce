import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages/pages.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [CategoryComponent,ContactComponent, ProductDetailsComponent, CartComponent],
  exports:[
    CategoryComponent,
    ContactComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
