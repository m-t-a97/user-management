import { Injectable } from '@angular/core';
import { UserRemovalService } from './user-removal.service';

@Injectable()
export class FirestoreUserRemovalService implements UserRemovalService {
  public removeUser(userID: string): void {}
}
