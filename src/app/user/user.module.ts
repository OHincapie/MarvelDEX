import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {MaterialModule} from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class UserModule { }
