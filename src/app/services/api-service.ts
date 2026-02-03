import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private dataBase = '/burger-api2';

  constructor(private monHttpClient: HttpClient) {}

  fetchMenu() {
    return this.monHttpClient.get(`${this.dataBase}/get.php`);
  }
  
  postPost(payload: unknown){
     return this.monHttpClient.post(`${this.dataBase}/post.php`, payload);
  }
  
}
