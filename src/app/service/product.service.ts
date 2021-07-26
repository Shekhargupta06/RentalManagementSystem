import { Injectable } from '@angular/core';
import { Observable, Subject,ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private locData = new ReplaySubject<any>(1);
  private subCatData = new ReplaySubject<any>(1);
  constructor() { }
  sendLocationData(data:any){
    console.log("data");
    console.log(data);
    this.locData.next(data);
  }
  getLocationData():Observable<any>{
    return this.locData.asObservable();
  }
  sendSubCategoryData(data:any){
    console.log("data");
    console.log(data);
    this.subCatData.next(data);
  }
  getSubCatData():Observable<any>{
    return this.subCatData.asObservable();
  }
}
