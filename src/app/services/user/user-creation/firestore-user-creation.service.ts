import { Injectable } from '@angular/core';
import { UserCreationService } from './user-creation.service';
import { IUser } from '../../../models/users/i-user';
import { FirestoreService } from '../../firestore/firestore.service';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable()
export class FirestoreUserCreationService implements UserCreationService {
  public constructor(private readonly firestoreService: FirestoreService) {}

  public createUser(user: IUser): void {
    this.firestoreService
      .getCollection('users')
      .add(user)
      .then((document: DocumentReference) => {
        const dataToAddToDocument = {
          uid: document.id,
        };

        document.set(dataToAddToDocument, { merge: true });
      });
  }
}
