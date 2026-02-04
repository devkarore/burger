import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { OurMenuArticleModel } from '../../models/article-model';

@Component({
  selector: 'app-our-menu',
  imports: [],
  templateUrl: './our-menu.html',
  styleUrl: './our-menu.scss',
})
export class OurMenu implements OnInit {
  articleOurMenu = signal<OurMenuArticleModel | null>(null);

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

  this.apiService.getOurMenuArticle(token).subscribe({
    next: (data: any) => {
      console.log('ourMenu data =', data);

      const article = Array.isArray(data) ? data[0] : data;

      this.articleOurMenu.set(
        new OurMenuArticleModel(
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