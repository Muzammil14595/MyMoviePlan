import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8080/api/user";
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.baseUrl, user).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );
  }
  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  login(user: User) {
    return this.http.post(this.baseUrl + "/login", user).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(errorMsg);
      })
    );;
  }
}
