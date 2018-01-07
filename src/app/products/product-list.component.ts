import {Component, Injectable, OnInit} from '@angular/core';
import { IProduct } from './product';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showimage: boolean = false;
  private _listFilter: string;
  public filteredProducts: IProduct[];
  private products: IProduct[];
  private errorMessage: any;

  constructor(private _productService: ProductService) { }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showimage = !this.showimage;

  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error2 => this.errorMessage = <any>error2);
  }

  public getProduct(id: number): IProduct[] {
    const prodArr: IProduct[] = [];
    this.products.forEach(product => {
      if (product.productId === id) {
        prodArr.push(product);
      }
    });
    return prodArr;
  }
}

