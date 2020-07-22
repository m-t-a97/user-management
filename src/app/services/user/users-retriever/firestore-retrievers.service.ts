import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../models/users/i-user';
import { UsersRetrieverService } from './users-retriever.service';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable()
export class FirestoreUsersRetrieverService implements UsersRetrieverService {
  private users$: Observable<IUser[]>;

  public constructor(private readonly firestoreService: FirestoreService) {
    this.users$ = this.firestoreService
      .getCollection('users')
      .valueChanges() as Observable<IUser[]>;
  }

  public retrieveUsers(): IUser[] | Observable<IUser[]> | Promise<IUser[]> {
    return this.users$;
  }
}
