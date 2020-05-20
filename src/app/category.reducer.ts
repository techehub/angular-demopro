import {ActionEx, CategoryActionTypes} from './category.actions';
export const initialState = [];
export function CategoryReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case CategoryActionTypes.CategorySelected:
      return [ action.payload.name];

  }
}
