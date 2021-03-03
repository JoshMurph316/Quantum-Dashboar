import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { UserService } from '../user.service';
import { User } from '../user';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
  users: Observable<User[]>;
  dataSource = new MatTableDataSource<User>();
  private changedUsersSubscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['email', 'name', 'age', 'details'];

  constructor(private usrSvc: UserService) { }

  ngOnInit(): void {
    // this.users = this.usrSvc.getUsers()
    this.changedUsersSubscription = this.usrSvc.usersListChanged.subscribe((users: User[]) => {
      this.dataSource.data = users;
    });
    this.usrSvc.fetchUsers();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.changedUsersSubscription.unsubscribe();
  }
}
