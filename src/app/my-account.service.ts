import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo, IUserInfo } from './product';

@Injectable({
  providedIn: 'root'
})

export class MyAccountService {
  accountUrl:string ="http://localhost:8000/welcome"

  constructor(private http:HttpClient ) { }

  getAccountInfo() : Observable<IUserInfo>{

    return this.http.get<IUserInfo>(this.accountUrl)
  }

}
