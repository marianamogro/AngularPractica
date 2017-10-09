import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from "@angular/router";

@Component({
  selector: 'pa2-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
isLogged:boolean;
  constructor(private _router: Router) {
    this.isLogged;
   }

  ngOnInit() {
  }
  username: string;

  toUpperCase () {
    this.username = this.username.toUpperCase();
  }
  toLowerCase () {
    this.username = this.username.toLowerCase();
  }
    myFunc(nombre:string){
   // console.logn("<pa2-persona></pa2-persona>");
   this._router.navigate([nombre]);  
  }
  
}


