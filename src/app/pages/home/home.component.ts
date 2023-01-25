import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  formRegister!: FormGroup


  constructor(
    private userService:ServicesService,
    private productService: ProductosService ,
    private router: Router){
      this.formRegister = new FormGroup({
        producto: new FormControl(),
        costo: new FormControl(),
        foto: new FormControl()
      })
  }

  onSubmit(){
    console.log(this.formRegister.value)
    const response = this.productService.addProduct(this.formRegister.value)
    console.log(response)
  }


  logout(){
    this.userService.logout()
      .then(()=>{
        this.router.navigate(['./login'])
      })
      .catch(error=>console.log(error))
  }
}
