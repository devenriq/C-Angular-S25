import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products!: Products[]

  constructor(private productService: ProductosService){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe(product=>{
      this.products = product
    })
  }

  onClickDelete(product:Products){
    const response = this.productService.deleteProduct(product)
    console.log(response)
  }

}
