import {
  Component,
  EventEmitter,
  Input,
  model,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonCheckbox,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonNote,
  IonText,
} from '@ionic/angular/standalone';
import { Item } from 'src/app/model/item/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonLabel,
    IonText,
    IonNote,
    IonCheckbox,
    FormsModule,
  ],
})
export class ItemListComponent implements OnInit {
  items = model<Item[]>();
  @Output() itemEdit = new EventEmitter<Item>();
  @Output() itemDelete = new EventEmitter<Item>();

  constructor() {}

  ngOnInit() {
    console.log('ItemListComponent initialized');
  }

  editItem(item: Item) {
    this.itemEdit.emit(item);
  }

  deleteItem(item: Item) {
    this.itemDelete.emit(item);
  }
}
