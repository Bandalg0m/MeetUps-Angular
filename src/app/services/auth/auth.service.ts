import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../../../utils/types/types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserAuthorized$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isUserAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.isUserAuthorized$.next(!!this.token);
    this.isUserAdmin$.next(!!this.userInfo?.roles.find((item) => item.name === 'ADMIN'));
  }

  public login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((res) => {
          res.token ? localStorage.setItem('auth-token', res.token) : null;
          this.isUserAuthorized$.next(true);
          this.isUserAdmin$.next(!!this.userInfo?.roles.find((item) => item.name === 'ADMIN'));
        })
      );
  }

  public logout() {
    localStorage.removeItem('auth-token');
    this.isUserAuthorized$.next(false);
    this.isUserAdmin$.next(false);
    void this.router.navigate(['/auth']);
  }

  public get token(): string | null {
    return localStorage.getItem('auth-token');
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  public get userInfo(): IUser | null {
    const token = this.token;
    if (token) {
      return this.parseJwt(token);
    }
    return null;
  }
}
