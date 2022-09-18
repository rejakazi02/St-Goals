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

  if(this.router.url=='/login' || this.router.url=='/otpform' || this.router.url=='/card-section' || this.router.url=='/result-card' || this.router.url=='/exam-result' || this.router.url=='/online-exam' || this.router.url=='/online-class' || this.router.url=='/attendence' || this.router.url=='/curriculam' || this.router.url=='/routine' || this.router.url=='/sms-info' || this.router.url=='/student-admission-form' || this.router.url=='/admission-form'  || this.router.url=='/details-institute'  || this.router.url=='/institute-chart' || this.router.url=='/userlogin' || this.router.url=='/registration' || this.router.url=='/regform' || this.router.url=='/addressform'){
       this.footerHide=false;
    }
    else
    {
      this.footerHide=true;
    }



    // nav int section

    this.router.events.subscribe(()=>{
      if(this.router.url=='/login' || this.router.url=='/otpform' || this.router.url=='/card-section' || this.router.url=='/result-card' || this.router.url=='/exam-result' || this.router.url=='/online-exam' || this.router.url=='/online-class' || this.router.url=='/attendence' || this.router.url=='/curriculam' || this.router.url=='/routine' || this.router.url=='/sms-info' || this.router.url=='/student-admission-form'  || this.router.url=='/admission-form'  || this.router.url=='/details-institute'  || this.router.url=='/institute-chart' || this.router.url=='/userlogin' || this.router.url=='/registration' || this.router.url=='/regform' || this.router.url=='/addressform'){
        this.footerHide=false;
     }
     else
     {
       this.footerHide=true;
     }
    })
  }
}
