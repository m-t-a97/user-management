import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../../models/users/i-user';

@Component({
  selector: 'user-component',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() public user: IUser;

  constructor() {}

  ngOnInit() {}

  public get Username(): string {
    return this.user.username;
  }

  public get Role(): string {
    return this.user.role;
  }
}
