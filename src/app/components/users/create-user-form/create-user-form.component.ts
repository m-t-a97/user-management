import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UserCreationService } from 'src/app/services/user/user-creation/user-creation.service';
import { FirestoreUserCreationService } from 'src/app/services/user/user-creation/firestore-user-creation.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'create-user-form-component',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss'],
  providers: [
    FirestoreService,
    { provide: UserCreationService, useClass: FirestoreUserCreationService },
  ],
})
export class CreateUserFormComponent implements OnInit {
  public readonly formGroup: FormGroup;
  public formMessage: string = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userCreationService: UserCreationService
  ) {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public createUser() {
    try {
      console.log(this.formGroup.value);
      this.userCreationService.createUser(this.formGroup.value);
      this.setFormMessage('');
      this.formGroup.reset();
    } catch (error) {
      console.log(error);
      this.setFormMessage(error['message']);
    }
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
