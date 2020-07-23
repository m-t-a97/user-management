import { Injectable } from '@angular/core';
import { UserFinderService } from './user-finder.service';
import { FirestoreService } from '../../firestore/firestore.service';

@Injectable()
export class FirestoreUserFinderService implements UserFinderService {
  public constructor(private readonly firestoreService: FirestoreService) {}

  public async findUser(searchValue: string) {
    const usersByUsername = this.findUsersByCriteria('username', searchValue);
    const usersByRole = this.findUsersByCriteria('role', searchValue);

    const [usersByUsernameSnapshot, usersByRoleSnapshot] = await Promise.all([
      usersByUsername,
      usersByRole,
    ]);

    if (usersByUsernameSnapshot && usersByUsernameSnapshot.docs.length > 0) {
      return Promise.resolve(usersByUsernameSnapshot);
    }

    if (usersByRoleSnapshot && usersByRoleSnapshot.docs.length > 0) {
      return Promise.resolve(usersByRoleSnapshot);
    }

    return Promise.resolve(null);
  }

  private findUsersByCriteria(criteria: string, searchValue: string) {
    return this.firestoreService
      .getCollection('users')
      .ref.where(criteria, '==', searchValue)
      .get();
  }
}
