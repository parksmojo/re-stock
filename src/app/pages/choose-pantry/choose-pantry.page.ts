import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-choose-pantry',
  templateUrl: './choose-pantry.page.html',
  styleUrls: ['./choose-pantry.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ChoosePantryPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('ChoosePantryPage initialized');
  }
}
