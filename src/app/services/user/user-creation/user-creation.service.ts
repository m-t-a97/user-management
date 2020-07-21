import { Injectable } from '@angular/core';
import { IUser } from '../../../models/users/i-user';

@Injectable()
export abstract class UserCreationService {
  public abstract createUser(user: IUser);
}
