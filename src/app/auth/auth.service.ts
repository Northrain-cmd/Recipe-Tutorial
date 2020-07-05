import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZRNsUW1zczamhPiK8qP_BE_eIq6zGQF0',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }).pipe(
        catchError(this.handleError)
       );
  }
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZRNsUW1zczamhPiK8qP_BE_eIq6zGQF0',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(
     catchError(this.handleError)
    );
  }
  private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = 'An unknown error occurred'
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
           errorMessage = 'This email already exists';
           break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email is not found';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid Password';
      }
      return throwError(errorMessage);
  }
  constructor(private http: HttpClient) {}
}
