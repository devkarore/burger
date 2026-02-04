import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { AboutUsArticleModel } from '../../models/article-model';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs implements OnInit {
  articleAboutUs = signal<AboutUsArticleModel | null>(null);

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}
ngOnInit(): void {
  const token = this.authService.getToken();

  if (!token) {
    console.error('Token absent');
    return;
  }

  this.apiService.getAboutUsArticle(token).subscribe({
    next: (data: any) => {
      console.log('aboutUs data =', data);

      const article = Array.isArray(data) ? data[0] : data;

      this.articleAboutUs.set(
        new AboutUsArticleModel(
          article.id,
          article.titre ?? '',
          article.sousTitre ?? '',
          article.photoURL ?? '',
          article.contenu ?? ''
        )
      );
    },
    error: (err) => {
      console.error('Erreur header API:', err);
    }
  });
}
}