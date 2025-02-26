import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { Recipe } from 'src/app/model/recipe/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
  imports: [
    IonHeader,
    IonButtons,
    IonButton,
    IonTitle,
    IonToolbar,
    IonContent,
    IonItem,
    FormsModule,
  ],
})
export class RecipeEditComponent implements OnInit {
  @Input()
  recipe: Recipe | null = null;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(null, 'confirm');
  }
}
