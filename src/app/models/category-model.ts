export class categoryModel {
    id: number;
    nom: string;
    sous_titre: string;
    photo: string;
    libelle_lien: string;
    href_lien: string;

    constructor(
        id: number,
        nom: string,
        sous_titre: string,
        photo: string,
        libelle_lien: string,
        href_lien: string
    ) {
        this.id = id;
        this.nom = nom;
        this.sous_titre = sous_titre;
        this.photo = photo;
        this.libelle_lien = libelle_lien;
        this.href_lien = href_lien;
    }
}