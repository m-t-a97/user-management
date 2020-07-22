import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../models/users/i-user';

@Injectable()
export abstract class UsersRetrieverService {
  public abstract retrieveUsers():
    | Observable<IUser[]>
    | Promise<IUser[]>
    | IUser[];
}
