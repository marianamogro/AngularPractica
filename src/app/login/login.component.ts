import { Component, OnInit } from '@angular/core';

import { RouterModule, Router } from "@angular/router";


@Component({
  selector: 'pa2-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged:boolean;
    
 
  constructor(private _router: Router) {
    this.isLogged = false;
   }
    
  ngOnInit() {
  } 
  onClick(username,password){
    if(username.value =="test" && password.value=="test"){
      this.isLogged = true;
      this._router.navigate(['lista']);             
    }
    else
      {
        console.log("Usuario o pass incorrectos");
      }
  }

}



