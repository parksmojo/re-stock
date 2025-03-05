import { Component, EventEmitter, model, OnInit, Output } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonNote,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pencil, trash } from 'ionicons/icons';
import { ItemData } from 'src/app/model/item/item';

@Component({
  selector: 'app-recipe-item-list',
  templateUrl: './recipe-item-list.component.html',
  styleUrls: ['./recipe-item-list.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
  ],
})
export class RecipeItemListComponent implements OnInit {
  items = model<ItemData[]>();
  @Output() itemEdit = new EventEmitter<ItemData>();
  @Output() itemDelete = new EventEmitter<ItemData>();

  constructor() {
    addIcons({ trash, pencil });
  }

  ngOnInit() {
    console.log('ItemListComponent initialized');
  }

  editItem(item: ItemData) {
    this.itemEdit.emit(item);
  }

  deleteItem(item: ItemData) {
    this.itemDelete.emit(item);
  }
}
