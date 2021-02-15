import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  question_list: string[];
  lifestyle_list: string[];

  constructor(
    private usrSvc: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.$id = this.route.snapshot.params['id'];

    this.usrSvc.getUserDetails(this.$id).subscribe(user => {
      this.user = user;
      console.log(user)

      // this.question_list = [];
      // for (const question in user.questions) {
      //   if(user.questions[question]) {
      //     this.question_list.push(question);
      //   }
      // }

      // this.lifestyle_list = Object.keys(user.lifestyle);
    });

  }

}
