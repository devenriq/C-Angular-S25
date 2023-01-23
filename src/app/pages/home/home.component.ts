import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private userService:ServicesService, private router: Router){}

  logout(){
    this.userService.logout()
      .then(()=>{
        this.router.navigate(['./login'])
      })
      .catch(error=>console.log(error))
  }
}
