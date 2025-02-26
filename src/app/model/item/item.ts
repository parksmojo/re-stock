export interface ItemData {
  id: number;
  name: string;
  quantity: number;
  price: number;
  purpose: string;
  expiration: Date;
  category: string;
  store: string;
}

export class Item {
  private _id: number;
  private _name: string;
  private _quantity: number;
  private _price: number;
  private _purpose: string;
  private _expiration: Date;
  private _category: string;
  private _store: string;

  constructor(
    name: string,
    quantity: number,
    price: number,
    purpose: string,
    expiration: Date,
    category: string,
    store: string
  ) {
    this._id = -1;
    this._name = name;
    this._quantity = quantity;
    this._price = price;
    this._purpose = purpose;
    this._expiration = expiration;
    this._category = category;
    this._store = store;
  }
}
