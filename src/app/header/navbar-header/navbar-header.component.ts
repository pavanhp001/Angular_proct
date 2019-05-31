import { Component, OnInit } from '@angular/core';
import { User, Role } from 'src/app/auth/_models';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/_services';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  public isLoged: boolean;
  currentUser: User;


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  ngOnInit(): void {
    throw new Error('NavbarHeaderComponent called');
  }

  get isLogedIn() {
    return this.authenticationService.isLogin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
