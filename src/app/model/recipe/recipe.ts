import { Item, ItemData } from '../item/item';

export interface RecipeData {
  name: string;
  description?: string;
  ingredients?: ItemData[];
}

export class Recipe {
  private _name: string;
  private _description: string;
  private _ingredients: Item[];

  constructor(data: RecipeData) {
    this._name = data.name;
    this._description = data.description ?? '';
    this._ingredients = data.ingredients?.map((data) => new Item(data)) ?? [];
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get ingredients(): ItemData[] {
    return this._ingredients;
  }

  get data(): RecipeData {
    return {
      name: this._name,
      description: this._description,
      ingredients: this._ingredients.map((item) => item.data),
    };
  }
}
