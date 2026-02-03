import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item-model';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit{
  tableauLiens: any = [];
  // Fonction qui s'exécute dès que le composant est créé par Angular
  ngOnInit() {
    // Instanciation des objets de la classe MenuItem
    let lien1 = new MenuItem(1, "/", "Home");
    let lien2 = new MenuItem(2, "#", "About");
    let lien3 = new MenuItem(3, "#", "Our menu");    
    let lien4 = new MenuItem(4, "#", "Hot Deals");
    let lien5 = new MenuItem(5, "#", "Contact Us");
    let lien6 = new MenuItem(6, "#", "Order Now");

    // Ajout de ces objets dans le tableau "tableauLiens"
    this.tableauLiens.push(lien1);
    this.tableauLiens.push(lien2);
    this.tableauLiens.push(lien3);
    this.tableauLiens.push(lien4);
    this.tableauLiens.push(lien5);
    this.tableauLiens.push(lien6);
  } 
}
