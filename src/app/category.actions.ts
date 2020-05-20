
import {Action} from '@ngrx/store';
export enum CategoryActionTypes {
  CategorySelected = 'CategorySelected'

}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class CategorySelected implements ActionEx {
  readonly type = CategoryActionTypes.CategorySelected;
  constructor(public payload: any) {
  }
}
