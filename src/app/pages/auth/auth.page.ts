import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
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
  IonHeader,
  IonInput,
  IonItem,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
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
export class AuthPage implements OnInit {
  errorMessage: string | null = null;

  login = {
    name: 'Login',
    func: this.auth.login,
    toggleMessage: "Don't have an account?",
  };
  register = {
    name: 'Register',
    func: this.auth.register,
    toggleMessage: 'Already have an account?',
  };
  authType = this.login;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('AuthPage initialized');
  }

  toggleAuthType() {
    this.authType = this.authType === this.login ? this.register : this.login;
  }

  inputForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  async onSubmit() {
    try {
      if (!this.inputForm.valid) {
        throw new Error('Form incomplete');
      }
      this.inputForm.disable();
      await this.authType.func(
        this.inputForm.value.email!,
        this.inputForm.value.password!
      );

      if (this.authType === this.register) {
        this.router.navigate(['/choose-pantry']);
      } else {
        this.router.navigate(['/main']);
      }
    } catch (error) {
      this.inputForm.enable();
      this.inputForm.reset();
      this.errorMessage = `Error during ${this.authType.name.toLowerCase()}`;
      console.error(error);
    }
  }

  async googleLogin() {
    try {
      await this.auth.googleLogin();
      this.router.navigate(['/main']);
    } catch (error) {
      console.error('Error during Google login:', error);
      this.errorMessage = 'Error during Google login';
    }
  }
}
