import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { Recipe } from 'src/app/model/recipe/recipe';
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
  @Output() recipeEdit = new EventEmitter<Recipe>();
  @Output() recipeDelete = new EventEmitter<Recipe>();
  @Output() recipeSend = new EventEmitter<Recipe>();

  constructor() {
    addIcons({ pencil, trash });
  }

  ngOnInit() {}

  sendRecipe(recipe: Recipe) {
    this.recipeSend.emit(recipe);
  }

  editRecipe(recipe: Recipe) {
    this.recipeEdit.emit(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipeDelete.emit(recipe);
  }
}
