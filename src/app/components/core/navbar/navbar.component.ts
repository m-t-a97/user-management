import { Component, OnInit } from '@angular/core';
import { INavbarItem } from '../../../models/navbar/i-navbar-item';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public readonly appTitle = 'USER MANAGEMENT';
  private readonly navbarItems: INavbarItem[] = [];

  constructor() {
    this.navbarItems = [
      {
        name: 'USERS',
        navigationLinkPath: '/manage-users',
      },
      {
        name: 'USER CREATION',
        navigationLinkPath: '/user-creation',
      },
    ];
  }

  ngOnInit(): void {}

  public get NavbarItems(): INavbarItem[] {
    return this.navbarItems;
  }
}
