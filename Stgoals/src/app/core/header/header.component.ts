import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  panelOpenState = false;

headerHide=true;
notiSlider=false;
userProfile=false;
closeBtn=true;
responceData:any;

  constructor(

    private router:Router,
    private authService: AuthService,

    ) { }

  ngOnInit(): void {
    this.headerHideControle();
this.userDataList();

  }

// notification btn work

  notiownSlider(){
    this.notiSlider=!this.notiSlider;

  }

// user Profile

ownUserProfile(){
  this.userProfile=!this.userProfile;
  // this.userDataList();
}

// close btn
ownCloseBtn(){
  this.userProfile=!this.closeBtn;
 
}

  // header controle

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

// user Data List
userDataList() {
  this.authService.userDataList().subscribe((result) => {
    this.responceData = result;
    console.log('user dataresponceData',this.responceData);
    // this.classtList()
  });
  
}


// logout section  
logout(): void {
  this.authService.logOut();
  this.userProfile=false;
}

}
