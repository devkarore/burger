import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
   getHeaderArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=header`, { headers });
  }
  getAboutUsArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=aboutUs`, { headers });
  }
  getHotDealArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=hotDeal`, { headers });
  }
  getOurMenuArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=ourMenu`, { headers });
  }
  getReviewsArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=reviews`, { headers });
  }
  getContactArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=contact`, { headers });
  }
  getTweetsWidgetArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=tweetsWidget`, { headers });
  }
  getNewsletterArticle(token: string) {
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  return this.monHttpClient.get(`${this.dataBase}/index.php?get=newsletter`, { headers });
  }
}