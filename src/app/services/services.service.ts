import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private auth:Auth) { }

  registerUser({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email, password)
  }

  logout(){
    return signOut(this.auth)
  }
}
