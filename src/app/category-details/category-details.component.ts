import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service'
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  subDataCat:Subscription;
  subCategoryData:any={};
  categoryName:any;
  constructor(private _productService:ProductService,private _location: Location) {
    this.subDataCat = this._productService.getSubCatData().subscribe(res => {
      console.log("subDataCat res");
      console.log(res);
      if (res) {
        this.subCategoryData = res.categoryData;
        this.categoryName = res.categoryName;
      } else {
        this.subCategoryData = {};
      }
    })
  }

  ngOnInit(): void {
  }
  backPrevious(){
    this._location.back();
  }
}
