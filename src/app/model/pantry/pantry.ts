import { Category, otherCategory } from '../category/category';
import { Item, ItemData } from '../item/item';
import { Recipe, RecipeData } from '../recipe/recipe';

export interface PantryData {
  stores: string[];
  categories: Category[];
  grocery: ItemData[];
  items: ItemData[];
  recipes: RecipeData[];
}

export class Pantry {
  private _stores: string[];
  private _categories: Category[];
  private _grocery: Item[];
  private _items: Item[];
  private _recipes: Recipe[];

  constructor() {
    this._stores = ['Any'];
    this._categories = [{ ...otherCategory }];
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

  get categories(): Category[] {
    return this._categories;
  }

  get stores(): string[] {
    return this._stores;
  }

  public addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
  }
  public deleteRecipe(recipe: Recipe) {
    this._recipes = this._recipes.filter((r) => r !== recipe);
  }

  public addGroceryItem(item: Item) {
    this._grocery.push(item);
  }
  public deleteGroceryItem(item: Item) {
    this._grocery = this._grocery.filter((i) => i !== item);
  }

  public deletePantryItem(item: Item) {
    this._items = this._items.filter((i) => i !== item);
  }

  public relistGroceryItem(item: Item) {
    item.checked = false;
    item.clearBought();
    item.clearExpiration();
    this.deletePantryItem(item);
    this.addGroceryItem(item);
  }

  public addRecipeToGrocery(recipe: Recipe) {
    recipe.ingredients.forEach((ingredient) => {
      const item = this._grocery.find((i) => i.equals(ingredient));
      if (item) {
        item.quantity += ingredient.quantity;
        item.purpose = item.purpose
          ? item.purpose + `, ${recipe.name}`
          : recipe.name;
      } else {
        ingredient.purpose = recipe.name;
        this._grocery.push(ingredient);
      }
    });
  }

  public processBoughtItems(store: string) {
    const boughtItems =
      store === 'Any'
        ? this.grocery.filter((item) => item.checked)
        : this._grocery.filter((item) => item.store === store && item.checked);
    boughtItems.forEach((item) => {
      this._grocery = this._grocery.filter((i) => i !== item);
      this._items.unshift(item);
      item.boughtToday();
    });
  }

  public clearPantryList() {
    this._items = [];
  }

  static generateCode(): string {
    return Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  static fromData(data: PantryData): Pantry {
    const pantry = new Pantry();
    pantry._stores = data.stores;
    pantry._categories = data.categories;
    pantry._grocery = data.grocery.map((item) => new Item(item));
    pantry._items = data.items.map((item) => new Item(item));
    pantry._recipes = data.recipes.map((recipe) => new Recipe(recipe));
    return pantry;
  }

  get data(): PantryData {
    return {
      stores: this._stores,
      categories: this._categories,
      grocery: this._grocery.map((item) => item.data),
      items: this._items.map((item) => item.data),
      recipes: this._recipes.map((recipe) => recipe.data),
    };
  }
}
