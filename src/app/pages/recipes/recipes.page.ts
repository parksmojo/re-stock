import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  ModalController,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { RecipeEditComponent } from 'src/app/components/recipe-edit/recipe-edit.component';
import { Recipe, RecipeData } from 'src/app/model/recipe/recipe';
import { DbService } from 'src/app/services/db/db.service';
import { RecipeListComponent } from '../../components/recipe-list/recipe-list.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    RecipeListComponent,
    IonFab,
    IonFabButton,
    IonIcon,
  ],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  testRecipe = new Recipe({
    name: 'Test Recipe',
    note: 'Test Description',
  });

  constructor(private db: DbService, private modalCtrl: ModalController) {
    addIcons({ add });
    this.refreshList();
  }

  refreshList() {
    this.recipes = this.db.pantry.recipes;
  }

  ngOnInit() {
    console.log('RecipesPage initialized');
  }

  async newRecipe() {
    const { data } = await this.editRecipeData({ name: 'New Recipe' });
    if (data) {
      this.db.pantry.addRecipe(new Recipe(data));
      this.refreshList();
    }
  }

  async editRecipe(recipe: Recipe) {
    const { data, role } = await this.editRecipeData(recipe.data);
    if (data) {
      recipe.update(data);
    } else if (role === 'delete') {
      this.db.pantry.deleteRecipe(recipe);
    }
    this.refreshList();
  }

  async editRecipeData(recipe: RecipeData) {
    const modal = await this.modalCtrl.create({
      component: RecipeEditComponent,
      componentProps: { recipe },
    });
    modal.present();
    return await modal.onWillDismiss();
  }
}
