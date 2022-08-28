import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerHide=true;


  constructor(
    private router:Router) {  }

  ngOnInit(): void {
    this.footerHideControle();
  }


footerHideControle(){

  // int render section

  if(this.router.url=='/login' || this.router.url=='/otpform' || this.router.url=='/details-institute'  || this.router.url=='/institute-chart' || this.router.url=='/userlogin' || this.router.url=='/registration' || this.router.url=='/regform' || this.router.url=='/addressform'){
       this.footerHide=false;
    }
    else
    {
      this.footerHide=true;
    }



    // nav int section

    this.router.events.subscribe(()=>{
      if(this.router.url=='/login' || this.router.url=='/otpform' || this.router.url=='/details-institute'  || this.router.url=='/institute-chart' || this.router.url=='/userlogin' || this.router.url=='/registration' || this.router.url=='/regform' || this.router.url=='/addressform'){
        this.footerHide=false;
     }
     else
     {
       this.footerHide=true;
     }
    })
  }
}
