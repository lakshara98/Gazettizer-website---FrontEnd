import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });

  private isUserLoggedIn;
  public userEmail;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  signUp(signValue) {
    return this.http.post('http://localhost:9000/saveitem', signValue, {headers: this.headers});
  }

  login(loginValue): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/deleteitem/' + loginValue , {headers: this.headers});
  }

  gazette(value): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9000/deleteitem/' + value , {headers: this.headers});
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
