import { ItemData } from '../item/item';
import { RecipeData } from '../recipe/recipe';

export interface PantryData {
  code: string;
  users: string[];
  stores: string[];
  categories: string[];
  items: ItemData[];
  recipes: RecipeData[];
}

export class Pantry {
  private _code: string;
  private _users: string[];
  private _stores: string[];
  private _categories: string[];
  private _items: ItemData[];
  private _recipes: RecipeData[];

  constructor(creatorEmail: string, code: string) {
    this._code = code;
    this._users = [creatorEmail];
    this._stores = [];
    this._categories = [];
    this._items = [];
    this._recipes = [];
  }

  static generateCode(): string {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  get data(): PantryData {
    return {
      code: this._code,
      users: this._users,
      stores: this._stores,
      categories: this._categories,
      items: this._items,
      recipes: this._recipes,
    };
  }

  static fromData(data: PantryData): Pantry {
    const pantry = new Pantry('', data.code);
    pantry._users = data.users;
    pantry._stores = data.stores;
    pantry._categories = data.categories;
    pantry._items = data.items;
    pantry._recipes = data.recipes;
    return pantry;
  }
}
