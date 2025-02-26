export interface RecipeData {
  id: number;
  name: string;
  description: string;
  ingredients: number[];
}

export class Recipe {
  private _id: number;
  private _name: string;
  private _description: string;
  private _ingredients: number[];

  constructor(name: string, description: string, ingredients: number[]) {
    this._id = -1;
    this._name = name;
    this._description = description;
    this._ingredients = ingredients;
  }
}
