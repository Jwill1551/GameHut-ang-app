import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/User';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private route: ActivatedRoute, private service: UserServiceService) { }

  ngOnInit(): void {
    this.users = this.service.getAllUsers();
  }
}
