import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  private errorMessage: string;
  showimage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {}

  onBack(): void {
    this._router.navigate(['/products']);
  }

  ngOnInit() {
    const param = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${param}`;

    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
     this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  toggleImage(): void {
    this.showimage = !this.showimage;

  }


}
