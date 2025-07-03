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

  /**
   * Retrieves the pantry ID associated with the currently authenticated user.
   *
   * @throws If there is no signed-in user.
   */
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

  /**
   * Retrieves the pantry data associated with the current pantry ID.
   *
   * @returns A promise that resolves to the Pantry object.
   * @throws If the pantry ID is not initialized or the pantry is not found.
   */
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

  /**
   * Sets the pantry ID for the currently authenticated user.
   *
   * If a `pantryId` is provided, verifies its existence in the pantry collection.
   * If no `pantryId` is provided, creates a new pantry and assigns its ID to the user.
   * Updates the user's document with the pantry ID.
   *
   * @param pantryId - (Optional) The ID of the pantry to assign to the user.
   * @throws If there is no signed-in user or if the provided pantry ID does not exist.
   */
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
