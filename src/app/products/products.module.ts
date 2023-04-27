import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashbordComponent } from './product-dashbord/product-dashbord.component';
import { ProductFormComponent } from './product-dashbord/product-form/product-form.component';
import { ProductCardComponent } from './product-dashbord/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductDashbordComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [ProductDashbordComponent],
})
export class ProductsModule { }
