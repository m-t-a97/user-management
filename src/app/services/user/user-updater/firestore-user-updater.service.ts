import { Injectable } from '@angular/core';
import { IUser } from '../../../models/users/i-user';
import { UserUpdaterService } from './user-updater.service';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable()
export class FirestoreUserUpdaterService implements UserUpdaterService {
  public constructor(private firestoreService: FirestoreService) {}

  public updateUser(user: IUser): void {
    this.firestoreService
      .getCollection('users')
      .doc(user.uid)
      .set(user, { merge: true });
  }
}
