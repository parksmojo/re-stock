import { Component, Input, input, OnInit } from '@angular/core';
import { IonItem, IonList, ModalController } from '@ionic/angular/standalone';
import { Recipe } from 'src/app/model/recipe/recipe';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  imports: [IonList, IonItem],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];

  constructor(private modalCtrl: ModalController) {}

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
}
