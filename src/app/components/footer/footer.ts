import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { TweetsWidgetModel, NewsletterModel } from '../../models/article-model';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  articleTweetsWidget = signal<TweetsWidgetModel | null>(null);
  articleNewsletter = signal<NewsletterModel | null>(null);

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

    this.apiService.getTweetsWidgetArticle(token).subscribe({
      next: (data: any) => {
        const article = Array.isArray(data) ? data[0] : data;
        this.articleTweetsWidget.set(
          new TweetsWidgetModel(
            article.id,
            article.titre ?? '',
            article.photoURL ?? '',
            article.contenu ?? '',
            article.libelle_lien ?? '',
            article.href_lien ?? ''
          )
        );
      },
      error: (err) => console.error('Erreur tweetsWidget API:', err),
    });

    this.apiService.getNewsletterArticle(token).subscribe({
      next: (data: any) => {
        const article2 = Array.isArray(data) ? data[0] : data;
        this.articleNewsletter.set(
          new NewsletterModel(
            article2.id,
            article2.titre ?? '',
            article2.contenu ?? ''
          )
        );
      },
      error: (err) => console.error('Erreur newsletter API:', err),
    });
  }
}
