import { Component, signal } from '@angular/core';
import { AuthService } from './services/auth-service';
// import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Header } from "./components/header/header";
import { Category } from "./components/category/category";
import { AboutUs } from "./components/about-us/about-us";
import { HotDeal } from './components/hot-deal/hot-deal';
import { OurMenu } from "./components/our-menu/our-menu";
import { Reviews } from "./components/reviews/reviews";
import { Contact } from "./components/contact/contact";
import { Footer } from './components/footer/footer';
import { ApiService } from './services/api-service';
import { Video } from './components/video/video';

@Component({
  selector: 'app-root',
  imports: [Menu, Header, Category, AboutUs, HotDeal, OurMenu, Reviews, Contact, Footer, Video],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('burger');
  constructor(private authService: AuthService, private apiService: ApiService) {
    this.authService.fetchJwtToken().subscribe({
    next: () => {
      this.apiService.fetchMenu().subscribe();
    },
    error: (err) => {
      console.error('Impossible de récupérer le JWT', err);
    }
  });
  }
}
