import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {
vvv=false;
tt:any
  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log('seaa');
    this.tt=true;
    // if(sea){
    //  this.vvv=true; 
    // }

  }

}
