import { Component, OnInit } from '@angular/core';
import { IonButton, IonMenuToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [HeaderComponent, IonButton, IonMenuToggle],
})
export class SettingsComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    addIcons({ close });
  }

  ngOnInit() {
    console.log('SettingsComponent initialized');
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/auth']);
  }
}
