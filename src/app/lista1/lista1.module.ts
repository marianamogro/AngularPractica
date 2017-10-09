import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lista1Component } from './lista1.component';
import {MatCardModule,MdButtonModule,MdInputModule} from '@angular/material';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,MdButtonModule,MdInputModule,
    RouterModule
  ],
  declarations: [Lista1Component]
})
export class Lista1Module { }
