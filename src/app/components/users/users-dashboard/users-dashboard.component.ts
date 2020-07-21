import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/users/i-user';

@Component({
  selector: 'users-dashboard-component',
  templateUrl: 'users-dashboard.component.html',
  styleUrls: ['users-dashboard.component.scss'],
})
export class UsersDashboardComponent implements OnInit {
  public Users: IUser[] = [
    { uid: '1', username: 'Name', role: 'Role' },
    { uid: '2', username: 'Name', role: 'Role' },
    { uid: '3', username: 'Name', role: 'Role' },
    { uid: '4', username: 'Name', role: 'Role' },
    { uid: '5', username: 'Name', role: 'Role' },
    { uid: '6', username: 'Name', role: 'Role' },
    { uid: '7', username: 'Name', role: 'Role' },
    { uid: '8', username: 'Name', role: 'Role' },
  ];

  constructor() {}

  ngOnInit() {}
}
