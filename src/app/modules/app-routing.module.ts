import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersDashboardComponent } from '../components/users/users-dashboard/users-dashboard.component';
import { CreateUserFormComponent } from '../components/users/create-user-form/create-user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage-users', pathMatch: 'full' },
  { path: 'manage-users', component: UsersDashboardComponent },
  { path: 'user-creation', component: CreateUserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
