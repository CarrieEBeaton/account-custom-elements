import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Menu';

  constructor(private router: Router,
    private authService: AuthService) { }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
