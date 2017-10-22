import { Component, OnInit } from '@angular/core';
import { CfService } from 'app/services/cf.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ICF } from 'app/shared/models';

declare let Materialize: any;

@Component({
    selector: 'newCF-component',
    templateUrl: './newCF.component.html',
    styleUrls: ['./newCF.component.css']
})
export class NewCFComponent implements OnInit {

    cfForm: FormGroup;

    constructor(private articleService: CfService,
        private router: Router) { }

    ngOnInit() {
        let adress = new FormControl(); let articleimposition = new FormControl(); let bloque = new FormControl();
        let categorie = new FormControl(); let email = new FormControl(); let fax = new FormControl();
        let idfiscale = new FormControl(); let nom = new FormControl(); let raisonsocial = new FormControl();
        let registrecommerce = new FormControl(); let remarque = new FormControl(); let solde = new FormControl();
        let telephone = new FormControl(); 

        this.cfForm = new FormGroup({
            adress: adress, articleimposition: articleimposition, bloque: bloque,
            categorie: categorie, email: email, fax: fax,
            idfiscale: idfiscale, nom: nom, raisonsocial: raisonsocial,
            registrecommerce: registrecommerce, remarque: remarque, solde: solde,
            telephone: telephone
        })
    }

    saveCF(formValues) {

        let newCF: ICF;
        newCF = {
            adress: formValues.adress,
            categorie: formValues.categorie,
            articleimposition: formValues.articleimposition,
            bloque: formValues.bloque,
            email: formValues.email,
            fax: formValues.fax,
            idfiscale: formValues.idfiscale,
            nom: formValues.nom,
            raisonsocial: formValues.raisonsocial,
            registrecommerce: formValues.registrecommerce,
            remarque: formValues.remarque,
            solde: formValues.solde,
            telephone: formValues.telephone
        }

        this.articleService.saveCF(newCF).subscribe((val) => {
            this.router.navigate(['/clientFournisseur']);
            Materialize.toast("success");
        },
            (err) => {
            },
            () => {

            });


    }

    cancel() {
        this.router.navigate(['/clientFournisseur']);
    }
}