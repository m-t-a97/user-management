import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { UserFinderService } from 'src/app/services/user/user-finder/user-finder.service';
import { FirestoreUserFinderService } from 'src/app/services/user/user-finder/firestore-user-finder.service';
import { IUser } from 'src/app/models/users/i-user';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'user-search-component',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  providers: [
    FirestoreService,
    { provide: UserFinderService, useClass: FirestoreUserFinderService },
  ],
})
export class UserSearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;
  private subscription = new Subscription();
  private usersFound: IUser[] = [];
  public message: string = '';
  public currentSearchValue: string = '';
  public isLoading: boolean = false;

  public constructor(private readonly userFinderService: UserFinderService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupSubscriptionToSearchInput();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setupSubscriptionToSearchInput() {
    this.subscription = fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .subscribe(async (event: Event) => {
        const searchValue = (<HTMLInputElement>event.target).value;
        this.currentSearchValue = searchValue;
        this.setMessage('');
        await this.findAndDisplayUsers();
      });
  }

  public async findAndDisplayUsers() {
    this.isLoading = true;

    const users = await this.userFinderService.findUser(
      this.currentSearchValue
    );

    if (users) {
      this.usersFound = users.docs.map((user: any) => user.data());
      this.setMessage('');
    } else {
      this.usersFound = [];
      this.setMessage('Could not find any users with this username or role...');
    }

    this.isLoading = false;
  }

  public setMessage(newMessage: string) {
    this.message = newMessage;
  }

  public get UsersFound(): IUser[] {
    return this.usersFound;
  }
}
