import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IProduct, ICategory } from './product';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class Service {

  //url:string ="/assets/data/products.json"
  productUrl:string ="http://localhost:3000/productlist"
  categoryUrl:string ="http://localhost:3000/category"

  constructor(private http:HttpClient) {}


    getProducts(cat) :Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.productUrl+"/"+cat)
    }

    getCategories() :Observable<ICategory[]>{
      return this.http.get<ICategory[]>(this.categoryUrl)
    }
}
