import { Item, ItemData } from '../item/item';
import { Recipe, RecipeData } from '../recipe/recipe';

export interface PantryData {
  code: string;
  users: string[];
  stores: string[];
  categories: string[];
  grocery: ItemData[];
  items: ItemData[];
  recipes: RecipeData[];
}

export class Pantry {
  private _code: string;
  private _users: string[];
  private _stores: string[];
  private _categories: string[];
  private _grocery: Item[];
  private _items: Item[];
  private _recipes: Recipe[];

  constructor(creatorEmail: string, code: string) {
    this._code = code;
    this._users = [creatorEmail];
    this._stores = [...defaultStores];
    this._categories = [...defaultCategories];
    this._grocery = [];
    this._items = [];
    this._recipes = [];
  }

  get items(): Item[] {
    return this._items;
  }

  get grocery(): Item[] {
    return this._grocery;
  }

  get recipes(): Recipe[] {
    return this._recipes;
  }

  static fromData(data: PantryData): Pantry {
    const pantry = new Pantry('', data.code);
    pantry._users = data.users;
    pantry._stores = data.stores;
    pantry._categories = data.categories;
    pantry._grocery = data.grocery.map((item) => new Item(item));
    pantry._items = data.items.map((item) => new Item(item));
    pantry._recipes = data.recipes.map((recipe) => new Recipe(recipe));
    return pantry;
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
      grocery: this._grocery.map((item) => item.data),
      items: this._items.map((item) => item.data),
      recipes: this._recipes.map((recipe) => recipe.data),
    };
  }
}

const defaultStores = [
  "Smith's",
  'Costco',
  "Trader Joe's",
  'Walmart',
  'Target',
];
const defaultCategories = ['Produce', 'Dairy', 'Meat', 'Bakery', 'Other'];
