import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable()
export class FirestoreService {
  constructor(private readonly firestore: AngularFirestore) {}

  public getCollection(
    collectionName: string
  ): AngularFirestoreCollection<unknown> {
    return this.firestore.collection(collectionName);
  }

  public getDocumentFromCollection(
    collectionName: string,
    documentID: string
  ): AngularFirestoreDocument<unknown> {
    return this.firestore.collection(collectionName).doc(documentID);
  }
}
