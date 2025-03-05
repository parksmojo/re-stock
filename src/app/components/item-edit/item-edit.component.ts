import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  AlertController,
  IonBackdrop,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonText,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { Item, ItemData } from 'src/app/model/item/item';
import { RecipeItemListComponent } from '../recipe-item-list/recipe-item-list.component';

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
  ],
})
export class ItemEditComponent implements OnInit {
  @Input() item: ItemData = { name: 'TEST' };

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

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
