import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { HotDealArticleModel } from '../../models/article-model';
import { HashtagsPipe } from '../../pipes/hashtags-pipe';


@Component({
  selector: 'app-hot-deal',
  imports: [HashtagsPipe],
  templateUrl: './hot-deal.html',
  styleUrl: './hot-deal.scss',
})
export class HotDeal implements OnInit {
  articleHotDeal = signal<HotDealArticleModel | null>(null);

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

  this.apiService.getHotDealArticle(token).subscribe({
    next: (data: any) => {
      console.log('hotDeal data =', data);

      const article = Array.isArray(data) ? data[0] : data;

      this.articleHotDeal.set(
        new HotDealArticleModel(
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