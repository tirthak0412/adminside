import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menuData } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url:string="http://localhost:3000/menu/";
  constructor(private _http:HttpClient) { }
  getAllData()
  {
    return this._http.get<menuData[]>(this.url);
  }
  deleteData(menu_id:number)
  {
    return this._http.delete(this.url+menu_id);
  }
  addData(item){
    return this._http.post(this.url,item);
  }


}
