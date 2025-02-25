import { Component, OnInit } from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { RecipeEditComponent } from 'src/app/components/recipe-edit/recipe-edit.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent],
})
export class RecipesPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async editRecipe() {
    const modal = await this.modalCtrl.create({
      component: RecipeEditComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      console.log('Recipe saved');
    }
  }
}
