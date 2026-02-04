import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { ContactModel } from '../../models/article-model';
import { HashtagsPipe } from '../../pipes/hashtags-pipe';

@Component({
  selector: 'app-contact',
  imports: [HashtagsPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  articleContact = signal<ContactModel | null>(null);

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

  this.apiService.getContactArticle(token).subscribe({
    next: (data: any) => {
      console.log('contact data =', data);

      const article = Array.isArray(data) ? data[0] : data;

      this.articleContact.set(
        new ContactModel (
          article.id,
          article.titre ?? '',
          article.sousTitre ?? '',
          article.contenu ?? '',
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