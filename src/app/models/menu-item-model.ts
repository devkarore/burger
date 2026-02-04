export class MenuItem { 
    // Propriétés
    id: number;
    lien: string;
    libelle: string;
    

    // Méthodes
    constructor(
        id: number,
        lien: string,
        libelle: string,
        
    ) {
        this.id = id;
        this.lien = lien;
        this.libelle = libelle;
        
    }
}