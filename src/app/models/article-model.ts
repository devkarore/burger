export class ArticleModel {
  id: number;
  titre: string;
  sousTitre: string;
  photoURL: string;
  contenu: string;
  libelle_lien: string;
  href_lien: string;

constructor(
    id: number, 
    titre: string, 
    sousTitre: string, 
    photoURL: string, 
    contenu: string, 
    libelle_lien: string, 
    href_lien: string
) {

    this.id = id;
    this.titre = titre;   
    this.sousTitre = sousTitre;
    this.photoURL = photoURL;
    this.contenu = contenu;
    this.libelle_lien = libelle_lien;
    this.href_lien = href_lien;
}}

export class HeaderArticleModel {
  id: number;
  sousTitre: string;
  photoURL: string;
  libelle_lien: string;
  href_lien: string;

  constructor(
    id: number,
    sousTitre: string,
    photoURL: string,
    libelle_lien: string,
    href_lien: string
  ) {
    this.id = id;
    this.sousTitre = sousTitre;
    this.photoURL = photoURL;
    this.libelle_lien = libelle_lien;
    this.href_lien = href_lien;
  }
}

export class AboutUsArticleModel {
  id: number;
  titre: string;
  sousTitre: string;
  photoURL: string;
  contenu: string;


  constructor(
    id: number,
    titre: string,
    sousTitre: string,
    photoURL: string,
    contenu: string
  ) {
    this.id = id;
    this.titre = titre;
    this.sousTitre = sousTitre;
    this.photoURL = photoURL;
    this.contenu = contenu;
    }
}
export class HotDealArticleModel {
  id: number;
  titre: string;
  sousTitre: string;
  photoURL: string;
  contenu: string;


  constructor(
    id: number,
    titre: string,
    sousTitre: string,
    photoURL: string,
    contenu: string
  ) {
    this.id = id;
    this.titre = titre;
    this.sousTitre = sousTitre;
    this.photoURL = photoURL;
    this.contenu = contenu;
    }
}
export class OurMenuArticleModel {
  id: number;
  titre: string;
  sousTitre: string;
  libelle_lien: string;
  href_lien: string;

constructor(
    id: number, 
    titre: string, 
    sousTitre: string, 
    libelle_lien: string, 
    href_lien: string
) {

    this.id = id;
    this.titre = titre;   
    this.sousTitre = sousTitre;
    this.libelle_lien = libelle_lien;
    this.href_lien = href_lien;
}}
export class ReviewsArticleModel {
  id: number;
  titre: string;
  sousTitre: string;
  libelle_lien: string;
  href_lien: string;

constructor(
    id: number, 
    titre: string, 
    sousTitre: string, 
    libelle_lien: string, 
    href_lien: string
) {

    this.id = id;
    this.titre = titre;   
    this.sousTitre = sousTitre;
    this.libelle_lien = libelle_lien;
    this.href_lien = href_lien;
}}

export class ContactModel {
  id: number;
  titre: string;
  sousTitre: string;
  contenu: string;
  libelle_lien: string;
  href_lien: string;

constructor(
    id: number, 
    titre: string, 
    sousTitre: string, 
    contenu: string, 
    libelle_lien: string, 
    href_lien: string
) {

    this.id = id;
    this.titre = titre;   
    this.sousTitre = sousTitre;
    this.contenu = contenu;
    this.libelle_lien = libelle_lien;
    this.href_lien = href_lien;
}}
export class TweetsWidgetModel {
  id: number;
  titre: string;
  photoURL: string;
  contenu: string;
  libelle_lien: string;
  href_lien: string;

constructor(
    id: number, 
    titre: string, 
    photoURL: string, 
    contenu: string, 
    libelle_lien: string, 
    href_lien: string
) {

    this.id = id;
    this.titre = titre;   
    this.photoURL = photoURL;
    this.contenu = contenu;
    this.libelle_lien = libelle_lien;
    this.href_lien = href_lien;
}}
export class NewsletterModel {
  id: number;
  titre: string;
  contenu: string;

constructor(
    id: number, 
    titre: string, 
    contenu: string, 

) {

    this.id = id;
    this.titre = titre;   
    this.contenu = contenu;

}}