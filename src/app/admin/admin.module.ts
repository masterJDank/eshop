import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './admin-container.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
