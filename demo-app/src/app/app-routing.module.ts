import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { WebsiteLayoutComponent } from './component/layout/website-layout/website-layout.component';
import { AdminLayoutComponent } from './component/layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductsComponent } from './page/admin/products/products.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

const routes: Routes = [
  {path: "",component: WebsiteLayoutComponent, 
    children: [
      {path:"",redirectTo: "home", pathMatch:"full"},
      {path: "home",component:HomeComponent},
      {path: "about",component: AboutComponent},
      {path: "product/:id", component: ProductDetailComponent}
    ]
  },
  {path: "admin",component: AdminLayoutComponent, 
    children: [
      {path:"",redirectTo: "dashboard", pathMatch:"full"},
      {path: "dashboard",component:DashboardComponent},
      {path: "products",component: ProductsComponent},
    ]
  },
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
