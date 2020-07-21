import { NgModule } from '@angular/core';
import { SharedCommonModule } from '../../modules/shared-common.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const PRIVATE_COMPONENTS = [
  UsersDashboardComponent,
  UserComponent,
  CreateUserFormComponent,
];

@NgModule({
  imports: [SharedCommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
  declarations: [...PRIVATE_COMPONENTS],
  providers: [],
})
export class UsersModule {}
