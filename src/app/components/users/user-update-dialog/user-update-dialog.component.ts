import { Component, OnInit, Input } from '@angular/core';
import { UserUpdaterService } from 'src/app/services/user/user-updater/user-updater.service';
import { FirestoreUserUpdaterService } from 'src/app/services/user/user-updater/firestore-user-updater.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { IUser } from 'src/app/models/users/i-user';

@Component({
  selector: 'user-update-dialog-component',
  templateUrl: './user-update-dialog.component.html',
  styleUrls: ['./user-update-dialog.component.scss'],
  providers: [
    FirestoreService,
    { provide: UserUpdaterService, useClass: FirestoreUserUpdaterService },
  ],
})
export class UserUpdateDialogComponent implements OnInit {
  @Input() public userToEdit: IUser;

  public canShowDialog: boolean = false;

  public formGroup: FormGroup;
  public formMessage: string = '';

  public constructor(
    private readonly userUpdaterService: UserUpdaterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [this.userToEdit.username, Validators.required],
      role: [this.userToEdit.role, Validators.required],
    });
  }

  public isFormValid(): void {
    if (this.Username.hasError('required')) {
      this.setFormMessage('Username is required');
    } else if (this.Role.hasError('required')) {
      this.setFormMessage('Role is required');
    } else {
      this.setFormMessage('');
    }
  }

  public updateUser() {
    try {
      const updatedUserData = {
        ...this.userToEdit,
        ...this.formGroup.value,
      };
      this.userUpdaterService.updateUser(updatedUserData);
      this.closeDialog();
    } catch (error) {
      console.log(error['message']);
    }
  }

  public closeDialog(): void {
    this.canShowDialog = false;
  }

  public setFormMessage(newMessage: string) {
    this.formMessage = newMessage;
  }

  public get Username(): AbstractControl {
    return this.formGroup.get('username');
  }

  public get Role(): AbstractControl {
    return this.formGroup.get('role');
  }
}
