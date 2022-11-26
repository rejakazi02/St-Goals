import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstituteListService } from 'src/app/services/institute-list.service';

@Component({
  selector: 'app-details-institute',
  templateUrl: './details-institute.component.html',
  styleUrls: ['./details-institute.component.scss']
})
export class DetailsInstituteComponent implements OnInit {


  instSlug:any;
  getInstiData:any;
  userRole: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private instService: InstituteListService,
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
