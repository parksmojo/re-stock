import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  AlertController,
  IonBadge,
  IonButton,
  IonButtons,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { ItemData } from 'src/app/model/item/item';
import { Category } from 'src/app/model/category/category';
import { DbService } from 'src/app/services/db/db.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonButtons,
    IonButton,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    FormsModule,
    IonSelect,
    IonSelectOption,
    IonList,
    IonTextarea,
  ],
})
export class ItemEditComponent implements OnInit {
  @Input() item: ItemData = { name: 'TEST' };
  itemTitle: string = 'item';
  categories: Category[] = [];
  stores: string[] = [];

  @Input() showQuantity: boolean = false;
  @Input() showCategory: boolean = false;
  @Input() showStore: boolean = false;
  @Input() showPurpose: boolean = false;
  @Input() showBought: boolean = false;
  @Input() showExpiration: boolean = false;

  constructor(
    db: DbService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    this.categories = db.pantry.categories;
    this.stores = db.pantry.stores;
  }

  ngOnInit() {
    this.itemTitle = this.item.name;
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  save() {
    this.modalCtrl.dismiss(this.item, 'save');
  }

  async confirmDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Delete Recipe',
      message: `Are you sure you want to delete ${this.item.name}?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => this.modalCtrl.dismiss(null, 'delete'),
        },
      ],
    });
    alert.present();
  }
}
