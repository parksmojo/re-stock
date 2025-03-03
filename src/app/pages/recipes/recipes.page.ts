import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonContent,
  ModalController,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { RecipeEditComponent } from 'src/app/components/recipe-edit/recipe-edit.component';
import { Recipe } from 'src/app/model/recipe/recipe';
import { DbService } from 'src/app/services/db/db.service';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, IonButton, RecipeListComponent],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  testRecipe = new Recipe({
    name: 'Test Recipe',
    note: 'Test Description',
  });

  constructor(db: DbService, private modalCtrl: ModalController) {
    this.recipes = db.pantry.recipes;
  }

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
