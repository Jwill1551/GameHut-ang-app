import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/User';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newId: any;
  first: any;
  last: any;
  email: any;
  user: User[] = [];

  constructor(private route: ActivatedRoute, private service: UserServiceService) { }

  ngOnInit(): void {
    this.user = this.service.getAllUsers();
    this.newId = this.user.length + 1;
  }

  newUser() {
    let newUser = new User(this.newId, this.first, this.last, this.email);
    this.service.createUser(newUser);
    console.log(newUser);
    alert("Game is Created!");
  }
}
