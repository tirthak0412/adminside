import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from './userdata.service';
import { Userdata } from './userdata';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserviewmoredialogcomponentComponent } from './userviewmoredialogcomponent/userviewmoredialogcomponent.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource:MatTableDataSource<Userdata>;
  displayedColumns:string[]=['email_id','name','mobile_no','dob','address','action']

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  user_tbl:Userdata[];
  i:number;

  constructor(private _data:UserdataService,private _router:Router,private _dialog:MatDialog) {
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit() {
      this._data.getAllData().subscribe(
        (data:Userdata[])=>{
          this.user_tbl=data;
            this.dataSource.data=data;
            this.dataSource.paginator=this.paginator;
            this.dataSource.sort=this.sort;
        }
      )
  }

  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(item:Userdata){

      if (confirm("Are you sure you want to delete ?"))
      {
        this._data.deleteData(item.email_id).subscribe(
        (data:any[])=>{
          this.user_tbl.splice(this.user_tbl.indexOf(item),1);
          this.dataSource.data=this.user_tbl;
          alert("Record is deleted");
        }
        );
      }
  }

  onAddRecord()
  {
    this._router.navigate(['adduser']);
  }

  onEdit(row)
  {
    this._router.navigate(['updateuser',row.email_id]);
  }

  onView(row){
    this._dialog.open(UserviewmoredialogcomponentComponent,{
      data:row
    });
  }

}
