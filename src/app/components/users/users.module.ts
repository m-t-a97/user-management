import { NgModule } from '@angular/core';
import { SharedCommonModule } from '../../modules/shared-common.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserUpdateDialogComponent } from './user-update-dialog/user-update-dialog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsersRetrieverService } from 'src/app/services/user/users-retriever/users-retriever.service';
import { FirestoreUsersRetrieverService } from 'src/app/services/user/users-retriever/firestore-retrievers.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

const PRIVATE_COMPONENTS = [
  UsersDashboardComponent,
  UserComponent,
  CreateUserFormComponent,
  UserUpdateDialogComponent,
  UserSearchComponent,
];

@NgModule({
  imports: [SharedCommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
  declarations: [...PRIVATE_COMPONENTS],
  providers: [
    FirestoreService,
    {
      provide: UsersRetrieverService,
      useClass: FirestoreUsersRetrieverService,
    },
  ],
})
export class UsersModule {}
