import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { categoryData } from '../category';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  constructor(private _act_router:ActivatedRoute,private _router:Router,private _category:CategoryService) { }
  cat_id:number;
  cat_name1:String;
  ngOnInit() {
    this.cat_id=this._act_router.snapshot.params["cat_id"];
    this._category.getDataById(this.cat_id).subscribe(
      (data:categoryData[])=>{
       // console.log(data);
        this.cat_name1=data[0].cat_name;
      }
    );
  }
  onEmployeeUpdate(f){
    console.log(f.value);
    console.log(f.value.cat_name);
    let category=new categoryData(this.cat_id,f.value.cat_name);
    this._category.updateData(category).subscribe(
      (data:categoryData[])=>{
        console.log(data);
        alert("record updated");
        this._router.navigate(['/category']);
      }
    );
  }
}
