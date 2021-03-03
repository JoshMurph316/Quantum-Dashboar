import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;

  displayedColumns: string[] = ['email', 'name', 'age', 'details'];

  constructor(private usrSvc: UserService) { }

  ngOnInit(): void {
    this.users = this.usrSvc.getUsers()
  }

}
