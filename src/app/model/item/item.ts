export interface ItemData {
  name: string;
  quantity?: number;
  category?: string;
  store?: string;
  checked?: boolean;
  purpose?: string;
  expiration?: Date;
  price?: number;
}

export class Item {
  private _name: string;
  private _quantity: number;
  private _category: string;
  private _store: string;
  private _checked: boolean;
  private _purpose: string | null;
  private _expiration: Date | null;
  private _price: number | null;

  constructor(data: ItemData) {
    this._name = data.name;
    this._quantity = data.quantity ?? 1;
    this._category = data.category ?? 'Other';
    this._store = data.store ?? 'Any';
    this._checked = data.checked ?? false;
    this._purpose = data.purpose ?? null;
    this._expiration = data.expiration ?? null;
    this._price = data.price ?? null;
  }

  public update(data: ItemData) {
    this._name = data.name;
    this._quantity = data.quantity ?? 1;
    this._category = data.category ?? 'Other';
    this._store = data.store ?? 'Any';
    this._checked = data.checked ?? false;
    this._purpose = data.purpose ?? null;
    this._expiration = data.expiration ?? null;
    this._price = data.price ?? null;
  }

  get name(): string {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get store(): string {
    return this._store;
  }

  get purpose(): string | null {
    return this._purpose;
  }
  set purpose(value: string | null) {
    this._purpose = value;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
  }

  get data(): ItemData {
    return {
      name: this._name,
      quantity: this._quantity,
      category: this._category,
      store: this._store,
      checked: this._checked,
      purpose: this._purpose ?? undefined,
      expiration: this._expiration ?? undefined,
      price: this._price ?? undefined,
    };
  }

  public equals(other: Item): boolean {
    return this._name === other._name;
  }
}
