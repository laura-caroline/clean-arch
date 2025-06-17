import { Product } from './product.entity';
import { v4 as uuidv4 } from 'uuid';

export class Customer {
  private _id: string;
  private _name: string;
  private _active: boolean;
  private _products: Product[];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): string {
    return this.id;
  }
  get name(): string {
    return this._name;
  }

  get active(): boolean {
    return this._active;
  }

  get products(): Product[] {
    return this._products;
  }
  changeStatusCustomer(active: boolean): void {
    this._active = active;
  }
}
