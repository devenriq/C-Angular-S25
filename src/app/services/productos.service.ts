import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private fireStore:Firestore) { }

  getProduct():Observable<Products[]>{
    const productRef=collection (this.fireStore,'product')
    return collectionData(productRef,{idField:'id'}) as Observable<Products[]>
  }

  addProduct(product:Products){
    const productRef = collection(this.fireStore, 'product')
    return addDoc(productRef, product)
  }

  deleteProduct(product:Products){
    const productRef = doc(this.fireStore, `product/${product.id}`)
    return deleteDoc(productRef)
  }

}
