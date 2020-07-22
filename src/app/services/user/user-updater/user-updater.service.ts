import { Injectable } from '@angular/core';
import { IUser } from '../../../models/users/i-user';

@Injectable()
export abstract class UserUpdaterService {
  public abstract updateUser(user: IUser): void;
}
