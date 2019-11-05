import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Userdata } from './userdata';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private _http:HttpClient) { }
  url:string="http://localhost:3000/employee/";
  getAllData()
  {
    return this._http.get(this.url);
  }
  getuserByid(email_id:string)
  {
    return this._http.get(this.url+email_id);
  }
  addData(item){
    return this._http.post(this.url,item);
  }
  updateData(item:Userdata){
    let body=JSON.stringify(item);
    let header=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.email_id,body,{headers:header});
  }
  deleteData(email_id)
  {
    let x=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+email_id,{headers:x});
  }
}
