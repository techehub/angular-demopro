

export class Product implements IProduct {

  public id: string;
  public name: string;
  public desc: string;
  public brand: string;
  public price: number;


  constructor(id:string, name:string,desc: string, brand: string, price: number) {
    this.id = id;
    this.name = name;
    this.brand=brand;
    this.price=price;
    this.desc=desc

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
  desc: string;
  brand: string;
  price: number;
}

export interface ICategory {
  name :string;
  code : string;
}

