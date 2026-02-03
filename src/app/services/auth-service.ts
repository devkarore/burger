import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private monHttpClient: HttpClient) {}


  fetchJwtToken() {
  return this.monHttpClient.get<{ token: string }>('http://localhost:8080/token.php')
    .pipe(tap((response) => {
        if (!response?.token) throw new Error('Token absent');
        localStorage.setItem('api_jwt', response.token);
      })
    );
}

getToken(): string | null {
  return localStorage.getItem('api_jwt');
}

  clearToken(): void {
    localStorage.removeItem('api_jwt');
  }
}