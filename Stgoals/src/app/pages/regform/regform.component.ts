import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  genders: any = ['Gender','Male', 'Female', 'Other'];
  bloodGroup: any = ['Blood Group','A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'];

}
