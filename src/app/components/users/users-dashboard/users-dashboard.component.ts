import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/users/i-user';
import { UsersRetrieverService } from 'src/app/services/user/users-retriever/users-retriever.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'users-dashboard-component',
  templateUrl: 'users-dashboard.component.html',
  styleUrls: ['users-dashboard.component.scss'],
})
export class UsersDashboardComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private readonly usersRetrieverService: UsersRetrieverService) {}

  ngOnInit() {
    this.users$ = this.usersRetrieverService.retrieveUsers() as Observable<
      IUser[]
    >;
  }
}
