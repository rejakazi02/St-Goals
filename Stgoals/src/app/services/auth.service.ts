import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const apiurl='https://api.omegaitsys.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  refreshTokenInterval: any;


  constructor(private http:HttpClient,  private route: Router) { }

// Institute super admin api 
proceedLogin(usercred: any){
return this.http.post<any>(apiurl + "admin/login", usercred)
}


// all user login api 
anyUserLogin(anyuserlogin:any){
  return this.http.post<any> (apiurl + "login", anyuserlogin)
}

// get all user data list
userDataList(){
  return this.http.get<any>(apiurl + 'my-info')
}


// instituteDataList(){
//   return this.http.get<any>(apiurl + 'admin/institutes?page=1')
// }

IsLoggedIn(){
  return localStorage.getItem('token')!=null;
}



isRole(){
  return localStorage.getItem('role')=='admin';
}





logOut(): void {
  localStorage.removeItem('token');
  // this.tokenService.removeAccessToken();
  // this.tokenService.removeRefreshToken();

  setTimeout(() => {
    clearInterval(this.refreshTokenInterval);
    this.refreshTokenInterval = null;
    this.route.navigate(['/login']);
    // window.location.reload();
  }, 1000);
}

}
