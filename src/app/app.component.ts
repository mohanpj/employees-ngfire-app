import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Firebase App';
  displayName: string;

  constructor(
    public authService: AuthService,
    private router: Router) {
      if (authService.isLoggedIn()) {
        this.displayName = authService.userDisplayName;
        router.navigate(['/home']);
      }
    }
}
