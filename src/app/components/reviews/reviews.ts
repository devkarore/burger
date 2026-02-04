import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { ReviewsArticleModel } from '../../models/article-model';
import { HashtagsPipe } from '../../pipes/hashtags-pipe';

@Component({
  selector: 'app-reviews',
  imports: [HashtagsPipe],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews implements OnInit {
  articleReviews = signal<ReviewsArticleModel | null>(null);

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

  this.apiService.getReviewsArticle(token).subscribe({
    next: (data: any) => {
      console.log('reviews data =', data);

      const article = Array.isArray(data) ? data[0] : data;

      this.articleReviews.set(
        new ReviewsArticleModel(
          article.id,
          article.titre ?? '',
          article.sousTitre ?? '',
          article.libelle_lien ?? '',
          article.href_lien ?? '',          
      )
      );
    },
    error: (err) => {
      console.error('Erreur header API:', err);
    }
  });
}
}