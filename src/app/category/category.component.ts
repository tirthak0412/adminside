import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from './category.service';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { categoryData } from './category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _cat_data:CategoryService,private _router:Router) {
    this.dataSource=new MatTableDataSource();
   }
  dataSource:MatTableDataSource<categoryData>;
  displayedColumns:string[]=['cat_name','action']

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  user_tbl:categoryData[]=[];
  ngOnInit()
  {
    this._cat_data.getAllData().subscribe(
      (data:categoryData[])=>{
        this.user_tbl=data;
        this.dataSource.data=data;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    );
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
      this._cat_data.deleteData(row.cat_id).subscribe(
        (data:any[])=>{
          this.user_tbl.splice(this.user_tbl.indexOf(row),1);
          this.dataSource.data=this.user_tbl;
          alert("Record is deleted");
        }
      );
    }
  }

  onAddRecord()
  {
    this._router.navigate(['addcategory']);
  }
  onEdit(row)
  {
    this._router.navigate(['updatecategory',row.cat_id]);
  }
}
