import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor() { }

  ngOnInit(): void {
    /** run clock */
    setInterval((e:any)=>{
      this.clockControll();
    },1000)
  }

  /*** clock calculation */
   day:any;
   hour:any;
   min:any;
   sec:any;
  
  clockControll(){
    var date = new Date();
      this.day = date.getDate();
      this.hour = date.getHours();
      this.min = date.getMinutes();
      this.sec = date.getSeconds();
        if(this.day < 10){
          this.day = "0"+this.day;
        }
        
        if(this.hour > 12){
          this.hour = this.hour -12;
        }
        if(this.hour == 0){
          this.hour = 12;
        }
        if(this.hour < 10){
          this.hour = "0"+this.hour;
        }
        if(this.min < 10){
          this.min = "0"+this.min;
        }
        if(this.sec < 10){
          this.sec = "0"+this.sec;
        }
  }

  /*** products area */
  products: any[] = [
    {
      image: './assets/images/products/01.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/02.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/03.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/04 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/05 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/06.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/07.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      image: './assets/images/products/08.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
  ];
/****
 * category Data
 */
  categoryData:any[] =[
    {
      _id:1,
      title:"Meat Items",
      subTitle:"(24 Items)",
      routerLink:'#',
      image:"./assets/images/image/meat.jpg"
    },
    {
      _id:2,
      title:"Dairy Items",
      subTitle:"(24 Items)",
      routerLink:'#',
      image:"./assets/images/image/dairy.jpg"
    },
    {
      _id:3,
      title:"Vegetables Items",
      subTitle:"(25 Items)",
      routerLink:'#',
      image:"./assets/images/image/vegetables.jpg"
    },
    {
      _id:4,
      title:"Fish Items",
      subTitle:"(27 Items)",
      routerLink:'#',
      image:"./assets/images/image/fish.jpg"
    },
    {
      _id:5,
      title:"Groceries Items",
      subTitle:"(24 Items)",
      routerLink:'#',
      image:"./assets/images/image/groceries.jpg"
    },
  ]

  /****
 * category Data
 */
   brandData:any[] =[
    {
      _id:1,
      title:"Natural Greeny",
      subTitle:"(45 items)",
      routerLink:'#',
      image:"./assets/images/image/07.jpg"
    },
    {
      _id:2,
      title:"Vegan Lover",
      subTitle:"(45 Items)",
      routerLink:'#',
      image:"./assets/images/image/08.jpg"
    },
    {
      _id:3,
      title:"organic foody",
      subTitle:"(35 Items)",
      routerLink:'#',
      image:"./assets/images/image/09.jpg"
    },
    {
      _id:4,
      title:"Ecomart Limited",
      subTitle:"(27 Items)",
      routerLink:'#',
      image:"./assets/images/image/10.jpg"
    },
    {
      _id:5,
      title:"Fresh Fortune",
      subTitle:"(34 Items)",
      routerLink:'#',
      image:"./assets/images/image/11.jpg"
    },
    {
      _id:6,
      title:"Econature",
      subTitle:"(34 Items)",
      routerLink:'#',
      image:"./assets/images/image/06.jpg"
    },
  ]


  featureData: any[] = [
    {
      image: './assets/images/products/09.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/products/10.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
      
    },
    {
      image: './assets/images/products/11.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/products/12.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/products/13.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
    {
      image: './assets/images/products/14.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
      desc:`Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...`,
      routerLink:"/product-details"
    },
  ];

}
