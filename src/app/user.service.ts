import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];

  constructor() {}

  login(username: string, password: string): boolean {
    // API call to check if user exists
    const isUserExist = this.users.find(m => m.username == username && m.password == password)
    console.log(this.users)
    if (isUserExist) {
      sessionStorage.setItem('currentUser', JSON.stringify(isUserExist));
      return true;
    }
    return false;


  }

  register(user: any): void {
    // API call to register user
    this.users.push(user);
    sessionStorage.setItem('currentUser', JSON.stringify(this.users));
    user;
    console.log(this.users)
  }

  getAllUsers(): any[] {
    // API call to get all users
    return this.users;
  }
}
