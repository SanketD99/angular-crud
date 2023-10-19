import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = '';
  username = '';
  password = '';
  id = '';

  constructor(private userService: UserService, private router: Router) {}

  register(): void {
    const user = { name: this.name, username: this.username, password: this.password, id: this.id };
    this.userService.register(user);
    console.log(user)
    this.router.navigate(['/user-list']);
  }
}

