import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from "@angular/router";


import {MdInputModule, MdButtonModule, MD_PLACEHOLDER_GLOBAL_OPTIONS, MdInput,MatAutocompleteModule} from '@angular/material';

import { LoginComponent } from './login.component';



@NgModule({
 
  imports: [
    CommonModule,MdInputModule,
    MdButtonModule, MatAutocompleteModule,RouterModule
  ],
  declarations: [LoginComponent],
  bootstrap:    [ LoginComponent ]
})


export class LoginModule { }


