export class ReviewsItemModel {
    id: number;
    nom: string;
    prenom: string;
    photo: string;
    note: number;
    date_avis: Date;
    commentaire: Text;

    constructor(
        id: number,
        nom: string,
        prenom: string,
        photo: string,
        note: number,
        date_avis: Date,
        commentaire: Text
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.photo = photo;
        this.note = note;
        this.date_avis = date_avis;
        this.commentaire = commentaire;
    }
}