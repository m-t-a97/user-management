import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/users/i-user';

@Component({
  selector: 'users-dashboard-component',
  templateUrl: 'users-dashboard.component.html',
  styleUrls: ['users-dashboard.component.scss'],
})
export class UsersDashboardComponent implements OnInit {
  public Users: IUser[] = [
    { uid: '1', username: 'Username', role: 'Role' },
    { uid: '2', username: 'Username', role: 'Role' },
    { uid: '3', username: 'Username', role: 'Role' },
    { uid: '4', username: 'Username', role: 'Role' },
    { uid: '5', username: 'Username', role: 'Role' },
    { uid: '6', username: 'Username', role: 'Role' },
    { uid: '7', username: 'Username', role: 'Role' },
    { uid: '8', username: 'Username', role: 'Role' },
  ];

  constructor() {}

  ngOnInit() {}
}
