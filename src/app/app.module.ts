import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolComponent } from './tool/tool.component';
import { FooterComponent } from './footer/footer.component';
import { AdminOfficeComponent } from './admin-office/admin-office.component';
import { AdminOfficeNavbarComponent } from './admin-office-navbar/admin-office-navbar.component';
import { AdminOfficeSidebarComponent } from './admin-office-sidebar/admin-office-sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FavorisProductsComponent } from './favoris-products/favoris-products.component';
import { PanierProductsComponent } from './panier-products/panier-products.component';

const ROUTES: Routes = [
    {path: 'shop', component: ShopProductsComponent},
    {path: 'home', component: ToolComponent},
    {path: 'favoris', component: FavorisProductsComponent},
    {path: 'panier', component: PanierProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolComponent,
    FooterComponent,
    AdminOfficeComponent,
    AdminOfficeNavbarComponent,
    AdminOfficeSidebarComponent,
    DashbordComponent,
    ShopProductsComponent,
    FavorisProductsComponent,
    PanierProductsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES),
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }