import { Component, Input, OnInit } from '@angular/core';
import { Item, ItemData } from 'src/app/model/item/item';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {
  @Input()
  item: Item | null = null;
  itemData: ItemData | null = null;

  constructor() {}

  ngOnInit() {
    if (this.item) {
      this.itemData = this.item.data;
    }
  }
}
