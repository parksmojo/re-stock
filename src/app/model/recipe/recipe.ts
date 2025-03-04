import { Item, ItemData } from '../item/item';

export interface RecipeData {
  name: string;
  ingredients?: ItemData[];
  note?: string;
}

export class Recipe {
  private _name: string;
  private _ingredients: Item[];
  private _note: string;

  constructor(data: RecipeData) {
    this._name = data.name;
    this._note = data.note ?? '';
    this._ingredients = data.ingredients?.map((data) => new Item(data)) ?? [];
  }

  update(data: RecipeData): void {
    this._name = data.name;
    this._note = data.note ?? '';
    this._ingredients = data.ingredients?.map((data) => new Item(data)) ?? [];
  }

  get name(): string {
    return this._name;
  }

  get note(): string {
    return this._note;
  }

  get ingredients(): ItemData[] {
    return this._ingredients;
  }

  get ingredientString(): string {
    return this._ingredients.map((item) => item.name).join(', ');
  }

  get data(): RecipeData {
    return {
      name: this._name,
      note: this._note === '' ? undefined : this._note,
      ingredients: this._ingredients.map((item) => item.data),
    };
  }
}
