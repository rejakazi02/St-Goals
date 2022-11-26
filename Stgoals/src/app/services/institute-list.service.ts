import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, switchMap } from 'rxjs/operators';
import { catchError, throwError } from 'rxjs';
// import { TokenService } from './token.service';

let apiurl = ' https://api.omegaitsys.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class InstituteListService {

  constructor(
    private http: HttpClient,
  ) { }


  instituteDataList(){
    return this.http.get<any>(apiurl + 'institutes?search_key=')
  }

  // seac Institute Data List
  seacInstituteDataList(instSerchId:any){
    return this.http.get<any>(apiurl + 'institutes?search_key='+instSerchId)
  }


// get institute info by slug 

getInstiInfo(instInfoSlug:any){
  return this.http.get<any>(apiurl + 'institutes/'+instInfoSlug)
}

 
  //Global token
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
