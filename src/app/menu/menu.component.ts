import { Component, OnInit, ViewChild } from '@angular/core';
import { menuData } from './menu';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dataSource:MatTableDataSource<menuData>;
  displayedColumns:string[]=['name','discription','price','is_jain','is_available','ingredients','cat_name','action']
  constructor(private _data:MenuService,private _router:Router) {
    this.dataSource=new MatTableDataSource();
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  menu_tbl:menuData[];
  ngOnInit() {
    this._data.getAllData().subscribe(
      (data:menuData[])=>{
        this.menu_tbl=data;
        this.dataSource.data=data;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    );
  }

  onAddRecord(){
    this._router.navigate(['addmenu']);
  }

  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }


  onDelete(row)
  {
    if (confirm("Are you sure you want to delete"))
    {
      this._data.deleteData(row.menu_id).subscribe(
        (data:any[])=>{
          this.menu_tbl.splice(this.menu_tbl.indexOf(row),1);
          this.dataSource.data=this.menu_tbl;
          alert("Record is deleted");
        }
      );
    }
  }
}
