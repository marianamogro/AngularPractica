import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule , MdIconModule,MdButtonModule} from "@angular/material";




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ListaModule } from "./lista/lista.module";






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MdToolbarModule , MdIconModule,MdButtonModule,ListaModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
