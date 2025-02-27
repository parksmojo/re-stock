import { Component, input, OnInit } from '@angular/core';
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close, menu } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonIcon,
  ],
})
export class HeaderComponent implements OnInit {
  title = input('title');
  menuIcon = input('menu');

  constructor() {
    addIcons({ menu, close });
  }

  ngOnInit() {
    console.log('HeaderComponent initialized');
  }
}
