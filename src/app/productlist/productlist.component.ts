import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import {  Service } from '../service';
import { Product, IProduct } from '../product';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  category: Observable<Category[]>;
  products :IProduct[]

  constructor(private service:Service, private store: Store<{ category: Category[] }>) {
    this.category = store.pipe(select('category'));
  }
  ngOnInit(): void {
    this.category.subscribe(()=>{

     let x= this.store
      .pipe(
         select('category')
      );


     x.forEach (e => {
       if ( e != undefined && e.length==1){

       console.log (e[0])

       this.service.getProducts(e[0]).subscribe(response =>
        {
          this.products=response;

        });


      }

      })


    })

  }


}



