import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { IUser } from '../../../models/users/i-user';
import { UserUpdateDialogComponent } from '../user-update-dialog/user-update-dialog.component';
import { UserRemovalService } from 'src/app/services/user/user-removal/user-removal.service';
import { FirestoreUserRemovalService } from 'src/app/services/user/user-removal/firestore-user-removal.service';

@Component({
  selector: 'user-component',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
  providers: [
    { provide: UserRemovalService, useClass: FirestoreUserRemovalService },
  ],
})
export class UserComponent implements OnInit {
  @Input() public user: IUser;
  @Output() public eventEmitter? = new EventEmitter();

  @ViewChild(UserUpdateDialogComponent)
  public userUpdateDialogComponent: UserUpdateDialogComponent;

  public constructor(private readonly userRemovalService: UserRemovalService) {}

  ngOnInit() {}

  public editUser() {
    this.userUpdateDialogComponent.canShowDialog = true;
  }

  public async deleteUser() {
    try {
      await this.userRemovalService.removeUser(this.user.uid);
      this.emitEventEmitter();
    } catch (error) {
      console.log(error);
    }
  }

  public emitEventEmitter() {
    this.eventEmitter.emit('');
  }

  public get Username(): string {
    return this.user.username;
  }

  public get Role(): string {
    return this.user.role;
  }
}
