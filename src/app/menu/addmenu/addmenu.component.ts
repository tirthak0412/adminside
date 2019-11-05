import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { MenuService } from '../menu.service';
import { categoryData } from 'src/app/category/category';
import { Router } from '@angular/router';
import { menuData } from '../menu';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  constructor(public _catData:CategoryService,private _menuData:MenuService,private _router:Router) { }
  selected:string;
  cat_data:categoryData[]=[];
  ngOnInit() {
    this._catData.getAllData().subscribe(
      (data:any[])=>{
        this.cat_data=data;
      }
    );
  }



  onMenuAdd(f)
  {
    this._menuData.addData(f.value).subscribe(
      (data:menuData[])=>{
        this._router.navigate(['menu']);
      }
    );
  }

}
