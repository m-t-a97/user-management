import { Component, OnInit } from '@angular/core';
import { INavbarItem } from '../../../models/navbar/i-navbar-item';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public readonly appTitle = 'USER MANAGEMENT';
  public readonly navbarItems: INavbarItem[];

  constructor() {
    this.navbarItems = [
      {
        name: 'MANAGE USERS',
        navigationLinkPath: '/manage-users',
      },
      {
        name: 'ADD USER',
        navigationLinkPath: '/add-user',
      },
    ];
  }

  ngOnInit(): void {}
}
