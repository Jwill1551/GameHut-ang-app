import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/User';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: any;
  first: any;
  last: any;
  email: any;
  selectedUser: any;

  constructor(private route: ActivatedRoute, private service: UserServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.selectedUser = this.service.getUser(this.id);
    console.log(this.id);
  }

  editUser() {
    this.service.updateUser(
      new User(this.id+1, this.first, this.last, this.email), this.id
    );
  }
}
