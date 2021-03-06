import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { take } from 'rxjs/operators';
import {  Service } from '../service';
import { Product, IProduct } from '../product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  category: Observable<Category[]>;
  products :IProduct[]

  constructor(private service:Service, private store: Store<{ category: Category[] }>) {
    this.category = store.pipe(select('category'));
  }
  ngOnInit(): void {

  }


}










