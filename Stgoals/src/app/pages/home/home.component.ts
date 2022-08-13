import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor() { }

  ngOnInit(): void {

  }



  newArrivalOffers:any[]=[
    {
      _id:1,
      title:"Unstitched",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'./assets/images/products/01.jpg',


    },
    {
      _id:2,
      title:"Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/02.jpg"
    },
    {
      _id:3,
      title:"Stitched",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/03.jpg"
    }
  ]


}
