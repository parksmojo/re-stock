import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [IonContent, HeaderComponent],
})
export class SettingsComponent implements OnInit {
  constructor() {
    addIcons({ close });
  }

  ngOnInit() {}
}
