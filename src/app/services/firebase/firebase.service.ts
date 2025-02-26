import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _app = initializeApp(environment.firebaseConfig);
  private _auth = getAuth(this._app);
  private _firestore = getFirestore(this._app);

  get app() {
    return this._app;
  }

  get auth() {
    return this._auth;
  }

  get db() {
    return this._firestore;
  }
}
