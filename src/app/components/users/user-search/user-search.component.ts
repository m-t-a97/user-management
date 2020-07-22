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
import { Subscription, fromEvent, of } from 'rxjs';
import {
  debounceTime,
  map,
  switchMap,
  distinctUntilChanged,
} from 'rxjs/operators';

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
      .pipe(
        debounceTime(1000),
        map((event: Event) => (<HTMLInputElement>event.target).value),
        distinctUntilChanged(),
        switchMap((searchValue) => this.userFinderService.findUser(searchValue))
      )
      .subscribe((users: IUser[]) => {
        console.log(users);
      });
  }

  public async findUser() {
    try {
    } catch (error) {
      console.log(error);
      this.setMessage('Failed to search for users...');
    }
  }

  public setMessage(newMessage: string) {
    this.message = newMessage;
  }

  public get UsersFound(): IUser[] {
    return this.usersFound;
  }
}
