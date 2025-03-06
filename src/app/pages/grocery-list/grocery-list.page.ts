import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonContent,
  IonSelect,
  IonSelectOption,
  ModalController,
  IonItem,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { DbService } from 'src/app/services/db/db.service';
import { Item, ItemData } from 'src/app/model/item/item';
import { ItemListComponent } from '../../components/item-list/item-list.component';
import { ItemEditComponent } from 'src/app/components/item-edit/item-edit.component';
import { addIcons } from 'ionicons';
import { chevronUp, pencil, trash, checkmarkDone, add } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
  standalone: true,
  imports: [
    IonFabList,
    IonFab,
    IonItem,
    IonContent,
    HeaderComponent,
    ItemListComponent,
    IonSelect,
    IonSelectOption,
    FormsModule,
    IonFabButton,
    IonIcon,
  ],
})
export class GroceryListPage implements OnInit {
  selectedStore: string = 'Any';

  constructor(
    protected db: DbService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
    addIcons({ chevronUp, checkmarkDone, add, trash, pencil });
  }

  ngOnInit() {
    console.log('GroceryListPage initialized');
  }

  get items() {
    return this.db.pantry.grocery.filter((item) =>
      this.selectedStore === 'Any' ? true : item.store === this.selectedStore
    );
  }

  async newItem() {
    const { data } = await this.editItemData({
      name: 'New Item',
      store: this.selectedStore,
    });
    if (data) {
      this.db.pantry.addGroceryItem(new Item(data));
    }
  }

  async editItem(item: Item) {
    const { data, role } = await this.editItemData(item.data);
    if (data) {
      item.update(data);
    } else if (role === 'delete') {
      this.db.pantry.deleteGroceryItem(item);
    }
  }

  async editItemData(item: ItemData) {
    const modal = await this.modalCtrl.create({
      component: ItemEditComponent,
      componentProps: { item },
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
          handler: () => this.db.pantry.deleteGroceryItem(item),
        },
      ],
    });
    alert.present();
  }

  async processCheckedItems() {
    const alert = await this.alertCtrl.create({
      header: 'Buy Items',
      message: `Are you sure you want to move all checked items to inventory?`,
      buttons: [
        { text: 'No', role: 'cancel' },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => this.db.pantry.processBoughtItems(this.selectedStore),
        },
      ],
    });
    alert.present();
  }
}
