import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonThumbnail,
  IonItem,
  IonText,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonInput,
    IonContent,
    CommonModule,
    ReactiveFormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonThumbnail,
    IonItem,
    IonText,
  ],
})
export class RegisterPage implements OnInit {
  errorMessage: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('RegisterPage initialized');
  }

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  async onSubmit() {
    try {
      if (!this.registerForm.valid) {
        throw new Error('Form incomplete');
      }
      this.registerForm.disable();
      await this.auth.register(
        this.registerForm.value.email!,
        this.registerForm.value.password!
      );
      this.router.navigate(['/main']);
    } catch (error) {
      this.registerForm.enable();
      this.registerForm.reset();
      this.errorMessage = 'Error registering user';
      console.error(error);
    }
  }
}
