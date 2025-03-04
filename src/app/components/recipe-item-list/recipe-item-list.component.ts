import { Component, input, Input, model, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList, IonNote } from '@ionic/angular/standalone';
import { Item, ItemData } from 'src/app/model/item/item';

@Component({
  selector: 'app-recipe-item-list',
  templateUrl: './recipe-item-list.component.html',
  styleUrls: ['./recipe-item-list.component.scss'],
  imports: [IonList, IonItem, IonLabel, IonNote],
})
export class RecipeItemListComponent implements OnInit {
  // @Input() items: Item[] = [];
  items = model<ItemData[]>();

  constructor() {}

  ngOnInit() {
    console.log('ItemListComponent initialized');
  }
}
