import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path:"",
    component:AdminContainerComponent,
    children:[
      {
        path:"products",
        loadChildren:()=>import('./products/products.module').then((m)=>m.ProductsModule)
      }
    ]
  },
  {
    path:"login",
    
      component:AdminLoginComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
