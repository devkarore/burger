import { Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [Menu, Header, Category, AboutUs, HotDeal, OurMenu, Reviews, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('burger');
  
}
