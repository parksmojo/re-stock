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
    IonBadge,
  ],
})
export class InventoryItemListComponent implements OnInit {
  items = model<Item[]>();
  @Output() itemEdit = new EventEmitter<Item>();
  @Output() itemDelete = new EventEmitter<Item>();
  @Output() itemList = new EventEmitter<Item>();

  constructor() {}

  ngOnInit() {}

  editItem(item: Item) {
    this.itemEdit.emit(item);
  }

  deleteItem(item: Item) {
    this.itemDelete.emit(item);
  }

  listItem(item: Item) {
    this.itemList.emit(item);
  }

  getDaystoExpiration(expirationDate: string): number {
    const exp = new Date(expirationDate!);
    const today = new Date();
    const timeDiff = exp.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return Math.max(0, daysDiff);
  }

  getExpirationBadgeStyle(expirationDate: string): { [key: string]: string } {
    const daysToExpiration = this.getDaystoExpiration(expirationDate);
    if (daysToExpiration <= 2) {
      return { '--background': 'red', '--color': 'white' };
    } else if (daysToExpiration <= 5) {
      return { '--background': 'orange', '--color': 'white' };
    } else {
      return { '--background': 'green', '--color': 'white' };
    }
  }
}
