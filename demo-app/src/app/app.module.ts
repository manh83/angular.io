import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductsComponent } from './page/admin/products/products.component';
import { WebsiteLayoutComponent } from './component/layout/website-layout/website-layout.component';
import { AdminLayoutComponent } from './component/layout/admin-layout/admin-layout.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    DashboardComponent,
    ProductsComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    SearchComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
