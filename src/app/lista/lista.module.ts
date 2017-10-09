import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ListaComponent } from './lista.component';
import {MatCardModule,MdButtonModule,MdInputModule} from '@angular/material';
import { Lista1Module } from './../lista1/lista1.module';
import { PersonaComponent } from '../persona/persona.component';
import { Persona2Component } from '../persona2/persona2.component';
import { Persona3Component } from '../persona3/persona3.component';







@NgModule({
  imports: [
    CommonModule,MatCardModule,MdButtonModule,MdInputModule,RouterModule, Lista1Module
  ],
  declarations: [ListaComponent, PersonaComponent, Persona2Component, Persona3Component]
})

export class ListaModule { }
