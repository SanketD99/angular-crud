import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    console.log(this.username)
    console.log(this.password)
    if (this.userService.login(this.username, this.password)) {
      this.router.navigate(['/user-details']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}

