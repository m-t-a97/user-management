import { Injectable } from '@angular/core';
import { UserRemovalService } from './user-removal.service';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable()
export class FirestoreUserRemovalService implements UserRemovalService {
  public constructor(private functions: AngularFireFunctions) {}

  public async removeUser(userID: string): Promise<any> {
    await this.functions
      .httpsCallable('removeUserDocumentFromFirestore')({
        userID: userID,
      })
      .toPromise();
  }
}
