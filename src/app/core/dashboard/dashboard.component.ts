import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user = this.authService.user;
constructor(private authService: AuthService,
  private router: Router,

  ) {}


  logout() {
    this.authService.logout().then( () => this.router.navigate(['/login']))
  }
}
