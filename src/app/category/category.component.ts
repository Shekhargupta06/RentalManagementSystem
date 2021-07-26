import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Subscription } from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  subData:Subscription;
  locationData:any={};
  categoryData:any={};
  locType:boolean= false;
  constructor(private route: ActivatedRoute,private _router: Router,private _productService:ProductService) { 
    this.subData = this._productService.getLocationData().subscribe(res => {
      console.log("res");
      console.log(res);
      if (res) {
        if (res.locationSelcted) {
          this.locationData = res.locationData;
          this.locType = res.locationSelcted;
        }
        else {
          this.categoryData = res.locationData;
          this.locType = res.locationSelcted;
        }

      } else {
        this.locationData = {};
        this.categoryData = {};
      }
    })
    console.log("this.subData");
    console.log(this.subData);
  }
  ngOnInit(): void {
  }
  selectedCategory(categoryData: any) {
    console.log("selectedCategoryData");
    console.log(categoryData);
    let obj = {
      categoryName: categoryData.name,
      categoryData: categoryData
    }
    this._productService.sendSubCategoryData(obj);
    this._router.navigate([categoryData.name], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subData.unsubscribe();
  }
}
