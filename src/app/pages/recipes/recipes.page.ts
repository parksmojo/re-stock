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
import { Recipe } from 'src/app/model/recipe/recipe';
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

  constructor(
    private db: DbService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
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
    const newRecipe = new Recipe({ name: 'New Recipe' });
    await this.editRecipe(newRecipe);
    // this.db.pantry.addRecipe(newRecipe);
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

  async deleteConfirmation(recipe: Recipe) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Recipe',
      message: `Are you sure you want to delete ${recipe.name}?`,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => this.deleteRecipe(recipe),
        },
      ],
    });
    alert.present();
  }

  deleteRecipe(recipe: Recipe) {
    this.db.pantry.deleteRecipe(recipe);
    this.refreshList();
  }
}
