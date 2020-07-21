import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'create-user-form-component',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss'],
})
export class CreateUserFormComponent implements OnInit {
  public readonly formGroup: FormGroup;
  public formMessage: string = '';

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public createUser() {
    console.log(this.formGroup.value);
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
