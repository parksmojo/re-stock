import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AlertController,
  IonBackdrop,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { RecipeData } from 'src/app/model/recipe/recipe';
import { RecipeItemListComponent } from '../recipe-item-list/recipe-item-list.component';
import { ItemEditComponent } from '../item-edit/item-edit.component';
import { ItemData } from 'src/app/model/item/item';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonHeader,
    IonButtons,
    IonButton,
    IonTitle,
    IonToolbar,
    IonContent,
    IonItem,
    IonInput,
    FormsModule,
    RecipeItemListComponent,
    IonBackdrop,
    IonTextarea,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class RecipeEditComponent implements OnInit {
  @Input() recipe: RecipeData = { name: 'TEST' };
  showBackdrop: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  save() {
    this.modalCtrl.dismiss(this.recipe, 'save');
  }

  async confirmDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Delete Recipe',
      message: `Are you sure you want to delete ${this.recipe?.name}?`,
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

  async addItem() {
    const { data, role } = await this.editItemData({ name: 'New Item' });
    if (data) {
      this.recipe.ingredients?.push(data);
    }
  }

  async editItem(item: ItemData) {
    const { data, role } = await this.editItemData(item);
    const i = this.recipe.ingredients?.findIndex((i) => i === item) ?? -1;
    if (data && i !== -1) {
      this.recipe.ingredients?.splice(i, 1, data);
    } else if (role === 'delete' && i !== -1) {
      this.recipe.ingredients?.splice(i, 1);
    }
  }

  async editItemData(item: ItemData) {
    const tempItem = { ...item };
    const modal = await this.modalCtrl.create({
      component: ItemEditComponent,
      componentProps: { item: tempItem },
      id: 'item-edit-modal',
    });
    modal.present();
    this.showBackdrop = true;

    const result = await modal.onWillDismiss();
    this.showBackdrop = false;
    return result;
  }
}
