import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private user_service: UserServiceService) { 
    
  }

   ngOnInit(): void {
    this.user_service.getUsers().subscribe((user) => {
      this.users = user
    })
  }

}
