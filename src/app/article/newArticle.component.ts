import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from 'app/services/article.service';
import { IArticle } from 'app/shared/models';
import { Router } from '@angular/router';

declare let Materialize: any;

@Component({
    selector: 'new-article',
    templateUrl: './newArticle.component.html',
})
export class NewArticleComponent implements OnInit {

    articleForm: FormGroup;
    constructor(private articleService: ArticleService,
        private router: Router) { }

    ngOnInit() {
        let designation = new FormControl(); let reference = new FormControl(); let nomtech = new FormControl();
        let categorie = new FormControl(); let famille = new FormControl(); let marque = new FormControl();
        let codeBarres = new FormControl(); let prixAchat = new FormControl(); let prixPub = new FormControl();
        let prixRev = new FormControl(); let prixSpec = new FormControl(); let qteStock = new FormControl();
        let qteMin = new FormControl(); let qteMax = new FormControl(); let qteCarton = new FormControl();
        let unite = new FormControl(); let tva = new FormControl(); let utilise = new FormControl();
        let inventaire = new FormControl(); let acommander = new FormControl();

        this.articleForm = new FormGroup({
            designation: designation, reference: reference, nomtech: nomtech,
            categorie: categorie, famille: famille, marque: marque,
            codeBarres: codeBarres, prixAchat: prixAchat, prixPub: prixPub,
            prixRev: prixRev, prixSpec: prixSpec, qteStock: qteStock,
            qteMin: qteMin, qteMax: qteMax, qteCarton: qteCarton,
            unite: unite, tva: tva, utilise: utilise,
            inventaire: inventaire, acommander: acommander
        })

    }
    saveArticle(formValues) {

        console.log(formValues.designation);
        let newArticle: IArticle;
        newArticle = {
            acommander: formValues.acommander,
            categorie: formValues.categorie,
            codeBarres: formValues.codeBarres,
            depot: null,
            designation: formValues.designation,
            expirable: false,
            famille: formValues.famille,
            inventaire: true,
            marque: formValues.marque,
            nomtech: formValues.nomtech,
            pmp: null,
            prixachat: formValues.prixAchat,
            prixpublic: formValues.prixPub,
            prixrevendeur: formValues.prixRev,
            prixspecial: formValues.prixSpec,
            qteCarton: formValues.qteCarton,
            qtemax: formValues.qteMax,
            qtemin: formValues.qteMin,
            qteprevue: null,
            qtestock: formValues.qteStock,
            reference: formValues.reference,
            tva: formValues.tva,
            unite: formValues.unite,
            utilise: true,
        }
        console.log(newArticle.designation);

        this.articleService.saveArticle(newArticle);
        Materialize.toast("success");
        this.router.navigate(['/stock']);

    }

    cancel() {
        this.router.navigate(['/stock']);
    }
}