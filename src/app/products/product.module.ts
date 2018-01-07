import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
  exports: [
    SharedModule
  ]
})
export class ProductModule { }
