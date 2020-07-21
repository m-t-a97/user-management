import { Injectable } from '@angular/core';
import { UserFinderService } from './user-finder.service';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable()
export class FirestoreUserFinderService implements UserFinderService {
  public constructor(private readonly firestoreService: FirestoreService) {}

  public findUser(
    username: string
  ): firebase.firestore.Query<firebase.firestore.DocumentData> {
    return this.firestoreService
      .getCollection('users')
      .ref.where('username', '==', username);
  }
}
