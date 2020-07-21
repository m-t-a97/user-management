import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersDashboardComponent } from '../components/users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage-users', pathMatch: 'full' },
  { path: 'manage-users', component: UsersDashboardComponent },
  // { path: 'add-user', component: null },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
