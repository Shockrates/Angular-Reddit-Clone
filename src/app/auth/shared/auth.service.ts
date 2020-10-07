import { Injectable } from '@angular/core';
import { SignupRequestPayload } from '../sign-up/sign-up-request.payload';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any>{
    return this.http.post('http://localhost:8080/api/auth/signup', signupRequestPayload);
  }
}