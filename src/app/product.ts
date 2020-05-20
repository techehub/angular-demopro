

export class Product implements IProduct {

  public id: string;
  public name: string;


  constructor(id:string, name:string) {
    this.id = id;
    this.name = name;

  }

}

export class Category implements ICategory {

  public code: string;
  public name: string;


  constructor(code:string, name:string) {
    this.code = code;
    this.name = name;

  }

}

export interface IProduct {

  id : string;
  name :string;

}

export interface ICategory {

  name :string;
  code : string

}

