import { Component, Input, input, OnInit } from '@angular/core';
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  ModalController,
} from '@ionic/angular/standalone';
import { Recipe } from 'src/app/model/recipe/recipe';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { addIcons } from 'ionicons';
import { pencil, trash } from 'ionicons/icons';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
  ],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];

  constructor(private modalCtrl: ModalController) {
    addIcons({ pencil, trash });
  }

  ngOnInit() {}

  async editRecipe(recipe: Recipe) {
    const modal = await this.modalCtrl.create({
      component: RecipeEditComponent,
      componentProps: { recipe },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      console.log('Recipe saved');
    }
  }

  deleteRecipe(recipe: Recipe) {
    console.log('uh oh');
  }
}
