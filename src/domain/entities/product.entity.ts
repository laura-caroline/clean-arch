import { v4 as uuidv4 } from 'uuid';
import { Customer } from './customer.entity';

export class Product {
  private _id: string;
  private _name: string;
  private _price: number;
  private _active: boolean;
  private _customer: Customer;

  constructor(name: string, customer: Customer) {
    this._id = uuidv4();
    this._name = name;
    this._customer = customer;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get active(): boolean {
    return this._active;
  }

  get customer(): Customer {
    return this._customer;
  }

  changeStatusProduct(active: boolean): void {
    this._active = active;
  }

  changePriceProduct(price: number): void {
    this._price = price;
  }
}
