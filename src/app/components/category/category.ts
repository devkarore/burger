import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { categoryModel } from '../../models/category-model';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category implements OnInit {
  Listcategory = signal<categoryModel[]>([]);

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

    this.apiService.getCatehory(token).subscribe({
      next: (data: any) => {
        console.log('category data =', data);

        const categories = (Array.isArray(data) ? data : [data])
          .filter((item) => item)
          .map(
            (item) =>
              new categoryModel(
                item.id,
                item.nom ?? '',
                item.sous_titre ?? '',
                item.photo ?? '',
                item.libelle_lien ?? '',
                item.href_lien ?? ''
              )
          );

        this.Listcategory.set(categories);
      },
      error: (err) => {
        console.error('Erreur category API:', err);
      },
    });
  }
}
