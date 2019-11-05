import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private _act_router:ActivatedRoute,private _user:UserdataService,private _router:Router) { }
  email_id1:string;
  password1:String;
  name1:String;
  mobile_no1:number;
  dob1:Date;
  address1:String;
  salary1:number;
  joining_date1:Date;
  employee_type1:number;
  ngOnInit() {
    this.email_id1=this._act_router.snapshot.params["email_id"];
    this._user.getuserByid(this.email_id1).subscribe(
      (data:Userdata[])=>{
        console.log(data);
        this.password1=data[0].password;
        this.name1=data[0].name;
        this.mobile_no1=data[0].mobile_no;
        this.dob1=data[0].dob;
        this.address1=data[0].address;
        this.salary1=data[0].salary;
        this.joining_date1=data[0].joining_date;
        this.employee_type1=data[0].employee_type;
      }
    );
  }
  onEmployeeUpdate(f)
  {
    this._user.updateData(f.value).subscribe(
      (data:any[])=>{
        console.log(f);
        this._router.navigate(['']);
      }
    );
  }
}
