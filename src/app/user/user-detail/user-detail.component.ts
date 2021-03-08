import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HAQ } from 'src/app/health-appraisal-questionnaire/haq-form/haq-form.model';
import { HealthHistory } from 'src/app/health-appraisal-questionnaire/health-history-form/health-history.model';
import { NutritionImmune } from 'src/app/health-appraisal-questionnaire/nutrition-immune-form/nutrition-immune.model';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  Object = Object;
  private userSubscription: Subscription;
  private $id: string;
  user: User;
  haq: HAQ;
  healthHistory: HealthHistory;
  nutritionImmune: NutritionImmune;
  haqPanelOpenState = false;
  displayedColumns: string[] = ['part', 'section', 'total', 'graph'];

  sectionData = new MatTableDataSource<any>();


  constructor(
    private usrSvc: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.$id = this.route.snapshot.params['id'];

    this.userSubscription = this.usrSvc.getUserDetails(this.$id).subscribe(user => {
      this.user = user;
      this.haq = user.haqForm;
      this.haq.parts.forEach(part => {
        part.sections.forEach(section => {
          let partLabel = part.label;
          let newSec = section;
          newSec['partLabel'] = partLabel;
          this.sectionData.data.push(newSec);
        });
      });
      console.log(this.sectionData);
      this.healthHistory = user.healthHistory;
      this.nutritionImmune = user.nutritionImmune;

      console.log(this.haq);
    });

  }
  ngAfterViewInit() {
    this.sectionData.paginator = this.paginator;
  }
  getColor(value: number, ranges):string {
    if(value < ranges.low) {
      return 'primary';
    } else if(value < ranges.med) {
      return 'accent'
    } else {
      return 'warn'
    }
  }
  doFilter(filterValue: string) {
    this.sectionData.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
