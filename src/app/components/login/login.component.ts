import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  formLogin!:FormGroup

  constructor(private userService: ServicesService, private router:Router){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
      .then(
        res=>{
          console.log(res)
          this.router.navigate(['/home'])
        }
      )
      .catch(
        error=>console.log(error)
      )
  }
}
