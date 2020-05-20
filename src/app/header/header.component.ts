import { Component, OnInit } from '@angular/core';


import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
import { Service } from '../service';
import { ICategory } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //categories : ICategory []= ['Men', 'Women', 'Eletronics']

  categories : Category []=null;
  category: Observable<Category[]>;

  constructor(private service:Service, private store: Store<{ category: Category[] }>) {
    this.category = store.pipe(select('category'));
  }

  selectCatagory(categoryName: string) {
    console.log ("Clicked !!!!")
    const category = new Category();
    category.name =categoryName;
    this.store.dispatch(new CategorySelected(category));
  }

  ngOnInit(): void {
     this.service.getCategories().subscribe( (data)=>{
     this.categories=data
    })

   }
}
