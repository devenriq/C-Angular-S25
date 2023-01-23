import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  formRegister!:FormGroup

  constructor(
    private userService: ServicesService,
    private router: Router,
  ){
    this.formRegister = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.registerUser(this.formRegister.value)
      .then(res=>{
        console.log(res)
        this.router.navigate(['/login'])
      })
      .catch(
        err=>console.log(err)
      )
  }

}
