import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonList } from '@ionic/angular/standalone';
import { Item } from 'src/app/model/item/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  imports: [IonList, IonItem],
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[] = [];

  constructor() {}

  ngOnInit() {
    console.log('ItemListComponent initialized');
  }
}
