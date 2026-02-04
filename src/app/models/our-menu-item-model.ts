export class OurMenuItem { 
    // Propriétés
    id: number;
    nom: string;
    sous_titre: string;
    photo: string;

    // Méthodes
    constructor(
        id: number,
        nom: string,
        sous_titre: string,
        photo: string
    ) {
        this.id = id;
        this.nom = nom;
        this.sous_titre = sous_titre;
        this.photo = photo;
    }
}