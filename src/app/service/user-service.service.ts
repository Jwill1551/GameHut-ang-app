import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import * as userdata from '../../data/user_data.json';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = []; // Create Users array data object

  constructor() {
    // Populate Users Array
    for (let i = 0; i < 8; i++) {
      let user = new User(userdata[i].id, userdata[i].first_name, userdata[i].last_name, userdata[i].email);
      this.users.push(user);
    }
  }

  // Return All Users
  public getAllUsers() {
    return this.users;
  }

  // Get a User by it's id
  public getUser(id: number) {
    for(let x = 0; x < this.users.length; x++) {
      if(this.users[x].Id == id) {
        return this.users[x];
      }
    }

    return null;
  }

  // Create an User
  public createUser(User: User) {
    this.users.push(User);
  }

  // Update an User
  public updateUser(User: User, id:number) {
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].Id === id) {
        this.users.splice(i, 1, User);
        return 0;
      }
    }
    
    return -1
  }

  // Delete User
  public deleteUser(id:number) {
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].Id === id) {
        this.users.splice(i, 1);
        return 0;
      }
    }
    
    return -1
  }
}
