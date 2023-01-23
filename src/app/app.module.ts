import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { Environment } from 'src/environments/environment';
import {  } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    ComponentsModule,
    PagesModule
    // providerFirebaseApp(()=>initializeApp(Environment.firebase)),
    // provideAuth(()=>getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
