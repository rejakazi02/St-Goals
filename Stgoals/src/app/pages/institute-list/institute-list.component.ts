import { InstituteListService } from './../../services/institute-list.service';
import { AuthService } from 'src/app/services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.scss']
})
export class InstituteListComponent implements OnInit {
  responceData:any;
  constructor(
    private instListService: InstituteListService,
  ) { }

  ngOnInit(): void {
    this.instituteDataList();
  }
// user Data List
instituteDataList() {
  this.instListService.instituteDataList().subscribe((result) => {
    this.responceData = result;
    console.log('user dataresponceData',this.responceData);
    // this.classtList()
  });
  
}


search(seachValue:any){

  this.instListService.seacInstituteDataList(seachValue).subscribe((result) => {
    this.responceData = result;
    console.log('se dataresponceData',this.responceData);
    // this.classtList()
  });

}

}
