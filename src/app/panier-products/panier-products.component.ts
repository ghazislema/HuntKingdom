import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../Model/produit';
import {ProduitServiceService} from '../service/produit-service.service';
import {CommandeServiceService} from '../service/commande-service.service';
import {Commande} from '../Model/commande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panier-products',
  templateUrl: './panier-products.component.html',
  styleUrls: ['./panier-products.component.css']
})
export class PanierProductsComponent implements OnInit {
    pannier: Array<Produit> = [];
    prixTotal: number = 0;
    quantiteTotal: number = 0;
    dateAchat: string;
    constructor(private produitService: ProduitServiceService, private commandeService: CommandeServiceService, public router: Router) { }
  ngOnInit() {
      this.loadPannier();
  }

    // Get pannier
    loadPannier() {
        this.pannier = this.produitService.getPannier();
        let date: Date = new Date();
        this.dateAchat = date.getDate() + ' / ' + (date.getMonth() + 1) + ' / ' + date.getFullYear();
        this.quantiteTotal = this.pannier.length;
        this.prixTotal = this.calculatePrixTotal(this.pannier, this.prixTotal);
    }

    calculatePrixTotal(pannier: Array<Produit>, prixTotal): number{
        for (let i = 0; i < pannier.length; i++) {
        prixTotal = prixTotal + pannier[i].prix;
        }
        return prixTotal;
    }

    addCommande() {
        let commande: Commande = new Commande();
        commande.numero_commande = 'CMD00030';
        commande.date_achat = this.dateAchat;
        commande.products = this.pannier;
        console.log(...this.pannier);
        commande.prix_total = this.prixTotal;
        commande.quantite_total = this.quantiteTotal;
        commande.is_valid = false;
        this.commandeService.createCommande(commande).subscribe((data: {}) => {
            this.router.navigate(['/shop']);
        });
    }

    deleteFromPanier(id) {
        let index: number;
        let prix: number;
        for (let i = 0; i < this.pannier.length; i++) {
            if (this.pannier[i].id === id) {
                index = i;
                prix = this.pannier[i].prix;

            }
        }
        this.pannier.splice(index, 1);
        this.quantiteTotal = this.quantiteTotal - 1 ;
        this.prixTotal = this.prixTotal - prix;
    }

}
