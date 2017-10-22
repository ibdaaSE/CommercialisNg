import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ICF } from 'app/shared/models';
import { CfService } from 'app/services/cf.service';
import { ActivatedRoute, Router } from '@angular/router';

declare let Materialize: any;

@Component({
    selector: 'editCF-component',
    templateUrl: './editCF.component.html',
    styleUrls: ['./editCF.component.css']
})
export class EditCFComponent implements OnInit {

    cfForm: FormGroup;
    adress = new FormControl(); articleimposition = new FormControl(); bloque = new FormControl();
    categorie = new FormControl(); email = new FormControl(); fax = new FormControl();
    idfiscale = new FormControl(); nom = new FormControl(); raisonsocial = new FormControl();
    registrecommerce = new FormControl(); remarque = new FormControl(); solde = new FormControl();
    telephone = new FormControl();
    cf: ICF;

    constructor(private cfService: CfService,
        private router: Router, private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.cfForm = new FormGroup({
            adress: this.adress, articleimposition: this.articleimposition, bloque: this.bloque,
            categorie: this.categorie, email: this.email, fax: this.fax,
            idfiscale: this.idfiscale, nom: this.nom, raisonsocial: this.raisonsocial,
            registrecommerce: this.registrecommerce, remarque: this.remarque, solde: this.solde,
            telephone: this.telephone
        })
        this.cfService.getCF(+this.route.snapshot.params['id']).subscribe(
            cf => {
                this.initCFForm(cf);
            }
        );
    }

    initCFForm(cf: ICF) {

        this.adress.setValue(cf.adress);
        this.articleimposition.setValue(cf.articleimposition);
        this.bloque.setValue(cf.bloque); this.categorie.setValue(cf.categorie);
        this.email.setValue(cf.email); this.fax.setValue(cf.fax);
        this.idfiscale.setValue(cf.idfiscale); this.nom.setValue(cf.nom);
        this.raisonsocial.setValue(cf.raisonsocial); this.registrecommerce.setValue(cf.registrecommerce);
        this.remarque.setValue(cf.remarque); this.solde.setValue(cf.solde);
        this.telephone.setValue(cf.telephone);
    }

    saveCF(formValues) {

        let newCF: ICF;
        newCF = {
            idClientFournisseur: +this.route.snapshot.params['id'],
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

        this.cfService.editCF(newCF).subscribe((val) => {
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