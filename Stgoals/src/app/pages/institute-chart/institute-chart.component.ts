import { InstituteListService } from './../../services/institute-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-institute-chart',
  templateUrl: './institute-chart.component.html',
  styleUrls: ['./institute-chart.component.scss']
})
export class InstituteChartComponent implements OnInit {
  instSlug:any;
  getInstiData:any;
  userRole: string;


  constructor(
    private activateRoute: ActivatedRoute,
    private instService: InstituteListService
  ) { }

  ngOnInit(): void {

     // update data
     this.activateRoute.paramMap.subscribe((param) => {
      this.instSlug = param.get('id');
      console.log('param', this.instSlug )
      if (this.instSlug) {
        this.getInstiInfo(this.instSlug);
      } 
    });

this.userRole=localStorage.getItem('role')
// console.log(this.userRole);

  }

  getInstiInfo(slug: any) {
    this.instService.getInstiInfo(slug).subscribe((result) => {
      this.getInstiData = result;
     console.log('this.getUpdateData', this.getInstiData)
      // this.test = this.getUpdateData?.student;
      // console.log('vvvv', this.test);
      
      // this.classData();
      // this.setFormData();
    });
  }

}
