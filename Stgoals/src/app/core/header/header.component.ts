import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

headerHide=true;



  constructor(
    
    private router:Router
    
    ) { }

  ngOnInit(): void {
    this.headerHideControle();
  
    
  }

headerHideControle(){

// int render section 

if(this.router.url=='/login' || this.router.url=='/otpform' || this.router.url=='/userlogin' || this.router.url=='/registration' || this.router.url=='/regform' || this.router.url=='/addressform'){
     this.headerHide=false;
  }
  else
  {
    this.headerHide=true;
  }
 
 

  // nav int section 

  this.router.events.subscribe(()=>{
    if(this.router.url=='/login' || this.router.url=='/otpform' || this.router.url=='/userlogin' || this.router.url=='/registration' || this.router.url=='/regform' || this.router.url=='/addressform'){
      this.headerHide=false;
   }
   else
   {
     this.headerHide=true;
   }
  })
}



}
