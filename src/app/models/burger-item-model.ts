export class BurgerItemModel {
    id: number;
    photo: string;
    nom: string;
    description: Text;

    constructor(
        id: number,
        photo: string,
        nom: string,
        description: Text
    ) {
        this.id = id;
        this.photo = photo;
        this.nom = nom;
        this.description = description;
    }
}