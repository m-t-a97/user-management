import { Injectable } from '@angular/core';

@Injectable()
export abstract class UserRemovalService {
  public abstract removeUser(userID: string): void;
}
