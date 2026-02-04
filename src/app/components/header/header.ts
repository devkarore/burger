import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { HeaderArticleModel } from '../../models/article-model';
import { HashtagsPipe } from '../../pipes/hashtags-pipe';

@Component({
  selector: 'app-header',
  imports: [HashtagsPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  articleHeader = signal<HeaderArticleModel | null>(null);

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

  this.apiService.getHeaderArticle(token).subscribe({
    next: (data: any) => {
      console.log('header data =', data);

      const article = Array.isArray(data) ? data[0] : data;

      this.articleHeader.set(
        new HeaderArticleModel(
          article.id,
          article.sousTitre ?? '',
          article.photoURL ?? '',
          article.libelle_lien ?? '',
          article.href_lien ?? ''
        )
      );
    },
    error: (err) => {
      console.error('Erreur header API:', err);
    }
  });
}

}