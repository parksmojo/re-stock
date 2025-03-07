import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonContent,
  ModalController,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { DbService } from 'src/app/services/db/db.service';
import { Item, ItemData } from 'src/app/model/item/item';
import { InventoryItemListComponent } from '../../components/inventory-item-list/inventory-item-list.component';
import { ItemEditComponent } from 'src/app/components/item-edit/item-edit.component';
import { addIcons } from 'ionicons';
import { add, pencil, trash } from 'ionicons/icons';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.page.html',
  styleUrls: ['./pantry.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, InventoryItemListComponent],
})
export class PantryPage implements OnInit {
  items: Item[] = [];

  constructor(
    private db: DbService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    this.refreshItems();
    addIcons({ add, trash, pencil });
  }

  refreshItems() {
    this.items = this.db.pantry.items;
    this.items.sort((a, b) => {
      if (a.expirationTime && b.expirationTime) {
        return a.expirationTime - b.expirationTime;
      } else if (a.expirationTime) {
        return 1;
      } else if (b.expirationTime) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  ngOnInit() {
    console.log('PantryPage initialized');
  }

  async editItem(item: Item) {
    const { data, role } = await this.editItemData(item.data);
    if (data) {
      item.update(data);
    } else if (role === 'delete') {
      this.db.pantry.deleteGroceryItem(item);
    }
    this.refreshItems();
  }

  async editItemData(item: ItemData) {
    const modal = await this.modalCtrl.create({
      component: ItemEditComponent,
      componentProps: {
        item,
        showQuantity: true,
        showCategory: true,
        showStore: true,
        showPurpose: true,
        showBought: true,
        showExpiration: true,
      },
      id: 'item-edit-modal',
    });
    modal.present();
    return await modal.onDidDismiss();
  }

  async confirmDeleteItem(item: Item) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Recipe',
      message: `Are you sure you want to delete ${item.name}?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => this.deleteItem(item),
        },
      ],
    });
    alert.present();
  }

  deleteItem(item: Item) {
    this.db.pantry.deletePantryItem(item);
    this.refreshItems();
  }
}
