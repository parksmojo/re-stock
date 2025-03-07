import { Component, EventEmitter, model, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonBadge,
  IonButton,
  IonCheckbox,
  IonDatetime,
  IonDatetimeButton,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonModal,
  IonNote,
  IonText,
} from '@ionic/angular/standalone';
import { Item } from 'src/app/model/item/item';

@Component({
  selector: 'app-inventory-item-list',
  templateUrl: './inventory-item-list.component.html',
  styleUrls: ['./inventory-item-list.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonLabel,
    IonText,
    FormsModule,
    IonButton,
  ],
})
export class InventoryItemListComponent implements OnInit {
  items = model<Item[]>();
  @Output() itemEdit = new EventEmitter<Item>();
  @Output() itemDelete = new EventEmitter<Item>();

  constructor() {}

  ngOnInit() {}

  editItem(item: Item) {
    this.itemEdit.emit(item);
  }

  deleteItem(item: Item) {
    this.itemDelete.emit(item);
  }
}
