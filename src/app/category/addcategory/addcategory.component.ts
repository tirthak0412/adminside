import { Component, OnInit } from '@angular/core';
import { categoryData } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private _category:CategoryService,private _router:Router) { }

  ngOnInit() {
  }
  onEmployeeAdd(f)
  {
    this._category.addData(f.value).subscribe(
      (data:any[])=>{
        alert("Data properly added");
      }
    );
    this._router.navigate(['category']);
  }
}
