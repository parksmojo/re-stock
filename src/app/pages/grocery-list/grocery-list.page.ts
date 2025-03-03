import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { DbService } from 'src/app/services/db/db.service';
import { Item } from 'src/app/model/item/item';
import { ItemListComponent } from '../../components/item-list/item-list.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, ItemListComponent],
})
export class GroceryListPage implements OnInit {
  items: Item[] = [];

  constructor(db: DbService) {
    this.items = db.pantry.grocery;
  }

  ngOnInit() {
    console.log('GroceryListPage initialized');
  }
}
