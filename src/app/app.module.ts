import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { arr_routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule,  MatSortModule, MatPaginatorModule, MatTableModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { UserviewmoredialogcomponentComponent } from './user/userviewmoredialogcomponent/userviewmoredialogcomponent.component';
import { AddusercomponentComponent } from './user/addusercomponent/addusercomponent.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { AddproductComponent } from './productdisplay/addproduct/addproduct.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './category/updatecategory/updatecategory.component';
import { MenuComponent } from './menu/menu.component';
import { AddmenuComponent } from './menu/addmenu/addmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserComponent,
    UserviewmoredialogcomponentComponent,
    AddusercomponentComponent,
    ProductdisplayComponent,
    AddproductComponent,
    UpdateuserComponent,
    CategoryComponent,
    AddcategoryComponent,
    UpdatecategoryComponent,
    MenuComponent,
    AddmenuComponent,
  ],
  imports: [
    arr_routing,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    LayoutModule,
    FormsModule,
    MatInputModule,
    MatDialogModule

  ],
  entryComponents:[
    UserviewmoredialogcomponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
