import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private dataBase = 'http://localhost:8080';

  constructor(private monHttpClient: HttpClient) {}

  fetchMenu() {
    return this.monHttpClient.get(`${this.dataBase}/get.php`);
  }
  
  postPost(payload: unknown){
     return this.monHttpClient.post(`${this.dataBase}/post.php`, payload);
  }
  
}
