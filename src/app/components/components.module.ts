import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports:[
    HeaderComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
