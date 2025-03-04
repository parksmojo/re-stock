import { Injectable } from '@angular/core';
import { FakeData } from 'src/app/model/fake-data/fake-data';
import { Pantry } from 'src/app/model/pantry/pantry';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private _pantry!: Pantry;

  constructor() {
    this.pullPantry();
  }

  get pantry() {
    return this._pantry;
  }

  public pullPantry() {
    this._pantry = Pantry.fromData(FakeData.pantry);
  }

  public pushPantry() {
    FakeData.pantry = this._pantry.data;
  }
}
