import { Component } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet } from '@ionic/angular/standalone';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, SettingsComponent, IonMenu],
})
export class AppComponent {
  constructor() {}
}
