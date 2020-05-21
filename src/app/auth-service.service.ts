import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url:string ="http://localhost:8000/signin"

  lg : Observable<boolean>

  constructor( private http: HttpClient) { }

  login (uname :string, pwd:string): Observable<boolean>{

    return this.http.post <{token:string}> (this.url, {"username": uname, "password": pwd})
        .pipe (
            map (
              (res)=> {
                  localStorage.setItem("access_token", res.token)
                  return true;
                }
              )
        );
    }

    logout() {
      localStorage.removeItem('access_token');
    }

    public  loggedIn(): boolean {
      return (localStorage.getItem('access_token') !== null);
    }
}
