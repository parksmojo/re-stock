import { inject, Injectable } from '@angular/core';
import { Pantry } from 'src/app/model/pantry/pantry';
import { FirebaseService } from '../firebase/firebase.service';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private readonly db = inject(FirebaseService).db;
  private readonly auth = inject(AuthService);
  private readonly userCollection = collection(this.db, 'user');
  private readonly pantryCollection = collection(this.db, 'pantry');

  private pantryId?: string;

  constructor() {
    this.getUserPantryId();
  }

  async getUserPantryId() {
    const usr = this.auth.getCurrentUser();
    if (!usr) {
      throw new Error('Cannot get pantry information without a signed in user');
    }

    const userSnap = await getDoc(doc(this.userCollection, usr.uid));
    if (userSnap.exists()) {
      this.pantryId = userSnap.get('pantryId');
    }
  }

  async getPantry(): Promise<Pantry> {
    if (!this.pantryId) {
      throw new Error('Pantry not yet initialized');
    }

    const pantrySnap = await getDoc(doc(this.pantryCollection, this.pantryId));
    if (!pantrySnap.exists()) {
      throw new Error('Pantry not found');
    }
    return pantrySnap.data() as Pantry;
  }

  public async savePantry(pantry: Pantry) {
    await setDoc(doc(this.pantryCollection, this.pantryId), pantry);
  }

  public async setUserPantry(pantryId?: string) {
    const usr = this.auth.getCurrentUser();
    if (!usr) {
      throw new Error('Cannot set pantry without a signed in user');
    }

    if (pantryId) {
      const pantrySnap = await getDoc(doc(this.pantryCollection, pantryId));
      if (pantrySnap.exists()) {
        throw new Error('Input pantry id does not exist');
      }
    } else {
      const newPantryRef = await addDoc(
        this.pantryCollection,
        new Pantry().data,
      );
      pantryId = newPantryRef.id;
    }

    await setDoc(
      doc(this.userCollection, usr.uid),
      { pantryId },
      { merge: true },
    );

    this.pantryId = pantryId;
  }
}
