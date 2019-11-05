import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { AddproductComponent } from './productdisplay/addproduct/addproduct.component';
import { AddusercomponentComponent } from './user/addusercomponent/addusercomponent.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from "./category/addcategory/addcategory.component";
import { UpdatecategoryComponent } from "./category/updatecategory/updatecategory.component";
import { MenuComponent } from "./menu/menu.component";
import { AddmenuComponent } from "./menu/addmenu/addmenu.component";

const arr:Routes=[
  {path:'',component:UserComponent},
  {path:'adduser',component:AddusercomponentComponent},
  {path:'updateuser/:email_id',component:UpdateuserComponent},
  {path:'category',component:CategoryComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'updatecategory/:cat_id',component:UpdatecategoryComponent},
  {path:'product',component:ProductdisplayComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'menu',component:MenuComponent},
  {path:'addmenu',component:AddmenuComponent}
]

export const arr_routing=RouterModule.forRoot(arr);
