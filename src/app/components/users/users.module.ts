import { NgModule } from '@angular/core';
import { SharedCommonModule } from '../../modules/shared-common.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserComponent } from './user/user.component';

const PUBLIC_COMPONENTS = [UsersDashboardComponent];
const PRIVATE_COMPONENTS = [UserComponent];

@NgModule({
  imports: [SharedCommonModule],
  exports: [...PUBLIC_COMPONENTS],
  declarations: [...PUBLIC_COMPONENTS, ...PRIVATE_COMPONENTS],
  providers: [],
})
export class UsersModule {}
