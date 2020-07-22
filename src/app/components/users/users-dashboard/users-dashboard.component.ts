import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/users/i-user';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { UsersRetrieverService } from 'src/app/services/user/users-retriever/users-retriever.service';
import { FirestoreUsersRetrieverService } from 'src/app/services/user/users-retriever/firestore-retrievers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'users-dashboard-component',
  templateUrl: 'users-dashboard.component.html',
  styleUrls: ['users-dashboard.component.scss'],
  providers: [
    FirestoreService,
    {
      provide: UsersRetrieverService,
      useClass: FirestoreUsersRetrieverService,
    },
  ],
})
export class UsersDashboardComponent implements OnInit {
  public users$: Observable<IUser[]>;

  constructor(private readonly usersRetrieverService: UsersRetrieverService) {}

  ngOnInit() {
    this.users$ = this.getUsers$();
  }

  public getUsers$(): Observable<IUser[]> {
    return this.usersRetrieverService.retrieveUsers() as Observable<IUser[]>;
  }
}
