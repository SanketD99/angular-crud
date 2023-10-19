import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
  }
}
