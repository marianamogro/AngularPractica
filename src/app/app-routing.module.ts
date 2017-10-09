import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ListaComponent } from "./lista/lista.component";
import { Lista1Component } from "./lista1/lista1.component";
import { PersonaComponent } from "./persona/persona.component";
import { Persona2Component } from "./persona2/persona2.component";
import { Persona3Component } from "./persona3/persona3.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'lista',
    component: ListaComponent
  },
  {
    path:'lista1',
    component: Lista1Component
  },
   {
    path:'persona',
    component: PersonaComponent
  },
     {
    path:'persona2',
    component: Persona2Component
  },
       {
    path:'persona3',
    component: Persona3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
