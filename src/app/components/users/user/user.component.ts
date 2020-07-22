import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IUser } from '../../../models/users/i-user';
import { UserUpdateDialogComponent } from '../user-update-dialog/user-update-dialog.component';

@Component({
  selector: 'user-component',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() public user: IUser;

  @ViewChild(UserUpdateDialogComponent)
  public userUpdateDialogComponent: UserUpdateDialogComponent;

  constructor() {}

  ngOnInit() {}

  public editUser() {
    this.userUpdateDialogComponent.canShowDialog = true;
    console.log(this.user);
  }

  public deleteUser() {}

  public get Username(): string {
    return this.user.username;
  }

  public get Role(): string {
    return this.user.role;
  }
}
