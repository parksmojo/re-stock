import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.page.html',
  styleUrls: ['./grocery-list.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent],
})
export class GroceryListPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('GroceryListPage initialized');
  }
}
