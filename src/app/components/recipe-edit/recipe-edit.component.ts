import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AlertController,
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
import { RecipeData } from 'src/app/model/recipe/recipe';
import { RecipeItemListComponent } from '../recipe-item-list/recipe-item-list.component';

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
    IonText,
  ],
})
export class RecipeEditComponent implements OnInit {
  @Input() recipe: RecipeData = { name: 'TEST' };

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
}
