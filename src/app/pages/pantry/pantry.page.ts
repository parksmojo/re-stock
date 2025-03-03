import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { DbService } from 'src/app/services/db/db.service';
import { Item } from 'src/app/model/item/item';
import { ItemListComponent } from '../../components/item-list/item-list.component';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.page.html',
  styleUrls: ['./pantry.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, ItemListComponent],
})
export class PantryPage implements OnInit {
  items: Item[] = [];

  constructor(db: DbService) {
    this.items = db.pantry.items;
  }

  ngOnInit() {
    console.log('PantryPage initialized');
  }
}
