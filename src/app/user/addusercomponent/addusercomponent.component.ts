import { Component, OnInit } from '@angular/core';
import { Userdata } from '../userdata';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-addusercomponent',
  templateUrl: './addusercomponent.component.html',
  styleUrls: ['./addusercomponent.component.css']
})
export class AddusercomponentComponent implements OnInit {

  constructor(private _employee:UserdataService,private _router:Router) { }

  ngOnInit() {
  }
  onEmployeeAdd(f){
    this._employee.addData(f.value).subscribe(
      (data:any[])=>{
        alert("Data is added");
      }
    );
    this._router.navigate(['']);
  }

}
