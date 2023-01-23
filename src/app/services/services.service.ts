import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private auth:Auth) { }

  registerUser(email:any,password:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
}
