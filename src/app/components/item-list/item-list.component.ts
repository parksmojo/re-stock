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
  IonBadge,
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
import { DbService } from 'src/app/services/db/db.service';

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
    IonBadge,
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
