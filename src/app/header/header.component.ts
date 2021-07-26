import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  products: any = [];
  locationSelcted:boolean = false;
  constructor(private httpClient: HttpClient,private _router: Router,private _productService:ProductService) { }

  ngOnInit(): void {
    this.httpClient.get("assets/catalog.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
    

  }
  openMyMenu() {
    console.log("on mouseenter");
    this.trigger.toggleMenu();
  } 
  selectedLocation(location:any,type:string){
    console.log("location");
    console.log(location);
    console.log(type);
    if(type =="locationType"){
      this.locationSelcted = true;
    }
    else{
      this.locationSelcted = false;
    }
    let obj = {
      locationData:location,
      locationSelcted:this.locationSelcted
    }
    this._productService.sendLocationData(obj);
    this.trigger.toggleMenu();
    this._router.navigate(['/category'])
}
}
