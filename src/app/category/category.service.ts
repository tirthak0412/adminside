import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { categoryData } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string="http://localhost:3000/category/";
  constructor(private _http:HttpClient) { }
  getAllData()
  {
    return this._http.get(this.url);
  }
  getDataById(cat_id:number)
  {
    return this._http.get(this.url+cat_id);
  }
  deleteData(cat_id:number)
  {
    return this._http.delete(this.url+cat_id);
  }
  addData(item)
  {
    return this._http.post(this.url,item);
  }
  updateData(item:categoryData)
  {
    console.log(item);
    let body=JSON.stringify(item);
    let header=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.cat_id,body,{headers:header});
  }
}
