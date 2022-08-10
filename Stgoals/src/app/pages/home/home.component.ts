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

/****
 *
 * product new list
 *
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

  // new product list


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


  // data storage start
  logo:any[] = [
    {
      image:'./assets/images/logo/logo.png'
    }
  ]

  products:any[] =[
    {
      _id:1,
      title:"Unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:'../../../assets/images/products/womanclot/UNF1.webp',


    },
    {
      _id:2,
      title:" Kurti",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JCKS-45009',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/womanclot/KF1.webp"
    },
    {
      _id:3,
      title:"Stich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/womanclot/SF2.webp"
    },
    {
      _id:4,
      title:"Kameez Shalwar",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/men/KF3.webp"
    },
    {
      _id:5,
      title:"Kurta",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY BLENDED KURTA | JCK-43129',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/men/KF2.webp"
    },
    {
      _id:6,
      title:"Waistcoat",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/men/WAISTCOAT-1.webp"
    },
    {
      _id:7,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/men/Naerang.webp"
    },
    {
      _id:8,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/men/Underwear_1.webp"
    },
    {
      _id:9,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/newArrivel/TEEN-1.webp"
    },
    {
      _id:10,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/newArrivel/TB1.webp"
    },
    {
      _id:11,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'WHITE BLENDED KAMEEZ SHALWAR | JJIKP-43146',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/newArrivel/KG1.webp"
    },
    {
      _id:12,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"../../../assets/images/products/newArrivel/KID-BOY-1.webp"
    },
    {
      _id:13,
      title:"unstich",
      subTitle:"Shop Now",
      routerLink:'#',
      desc:'CREAM POLYESTER VISCOSE KAMEEZ SHALWAR | JCKS-43126',
      price:'bdt 4500',
      priceDis:'bdt 4500',
      image:"./assets/images/products/13.jpg"
    }
  ]

  banners:any[] = [
    {
      _id:1,
      routerLink:'#',
      image:'./assets/images/products/banner/banner1.jpg',

    }
  ]

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


  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  getProdId1(index: number): string {
    if(index === 0) {
      return 'item-0';
    } else if(index === 1) {
      return 'item-1'
    } else {
      return 'item-2'
    }

  }
  getProdId2(index: number): string {
    if(index === 0) {
      return 'item-3';
    } else if(index === 1) {
      return 'item-4'
    } else {
      return 'item-5'
    }
  }
  getProdId3(index: number): string {
    if(index === 0) {
      return 'item-6';
    } else if(index === 1) {
      return 'item-7'
    } else if(index===2) {
      return 'item-8'
    } else if(index===3) {
      return 'item-9'
    } else {
      return 'item-10'
    }
  }

  productsData:any[] =[
    {
      _id:1,

      image:"../../../assets/images/products/womenOffer/banner123_4.webp"
    },
    {
      _id:2,
      image:"../../../assets/images/products/womenOffer/banner2.webp"
    },
    {
      _id:3,
      image:"../../../assets/images/products/womenOffer/banner123_4.webp"
    },
    {
      _id:4,
      image:"../../../assets/images/products/womenOffer/banner2.webp"
    }
  ]
}
