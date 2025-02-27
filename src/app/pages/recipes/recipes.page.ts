import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonContent,
  ModalController,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { RecipeEditComponent } from 'src/app/components/recipe-edit/recipe-edit.component';
import { Item } from 'src/app/model/item/item';
import { Recipe } from 'src/app/model/recipe/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, IonButton],
})
export class RecipesPage implements OnInit {
  testRecipe = new Recipe({
    name: 'Test Recipe',
    description: 'Test Description',
  });

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('RecipesPage initialized');
  }

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
}
