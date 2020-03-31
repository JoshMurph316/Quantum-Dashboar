import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  $id: string;
  user: User;

  constructor(
    private usrSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.$id = this.route.snapshot.params['id'];

    this.usrSvc.getUserDetails(this.$id).subscribe(user => {
      this.user = user;
      console.log(user);
    });

  }

}
