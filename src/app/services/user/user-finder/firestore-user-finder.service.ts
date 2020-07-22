import { Injectable } from '@angular/core';
import { UserFinderService } from './user-finder.service';
import { FirestoreService } from '../../firestore/firestore.service';
import { IUser } from 'src/app/models/users/i-user';
import { first, map } from 'rxjs/operators';

@Injectable()
export class FirestoreUserFinderService implements UserFinderService {
  public constructor(private readonly firestoreService: FirestoreService) {}

  public async findUser(searchValue: string) {
    return this.firestoreService.getCollection('users').valueChanges();
  }
}
