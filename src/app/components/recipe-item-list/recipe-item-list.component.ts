import { Component, EventEmitter, model, OnInit, Output } from '@angular/core';
import { IonItem, IonLabel, IonList, IonNote } from '@ionic/angular/standalone';
import { ItemData } from 'src/app/model/item/item';

@Component({
  selector: 'app-recipe-item-list',
  templateUrl: './recipe-item-list.component.html',
  styleUrls: ['./recipe-item-list.component.scss'],
  imports: [IonList, IonItem, IonLabel, IonNote],
})
export class RecipeItemListComponent implements OnInit {
  items = model<ItemData[]>();
  @Output() itemEdit = new EventEmitter<ItemData>();

  constructor() {}

  ngOnInit() {
    console.log('ItemListComponent initialized');
  }

  editItem(item: ItemData) {
    this.itemEdit.emit(item);
  }
}
