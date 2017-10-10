import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticleService } from 'app/services/article.service';
import { IArticle } from 'app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';

declare let Materialize: any;

@Component({
    selector: 'edit-article',
    templateUrl: './editArticle.component.html',
})
export class EditArticleComponent implements OnInit {

    articleForm: FormGroup;
    article: IArticle;
    constructor(private articleService: ArticleService,
        private router: Router, private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.articleService.getArticle(+this.route.snapshot.params['id']).subscribe(
            article => {
                this.initArticleForm(article);
            }
        );
    }

    initArticleForm(article: IArticle) {
        let designation = new FormControl(article.designation); let reference = new FormControl(article.reference);
        let nomtech = new FormControl(article.nomtech); let categorie = new FormControl(article.categorie);
        let famille = new FormControl(article.famille); let marque = new FormControl(article.marque);
        let codeBarres = new FormControl(article.codeBarres); let prixAchat = new FormControl(article.prixachat);
        let prixPub = new FormControl(article.prixpublic); let prixRev = new FormControl(article.prixrevendeur);
        let prixSpec = new FormControl(article.prixspecial); let qteStock = new FormControl(article.qtestock);
        let qteMin = new FormControl(article.qtemin); let qteMax = new FormControl(article.qtemax);
        let qteCarton = new FormControl(article.qteCarton); let unite = new FormControl(article.unite);
        let tva = new FormControl(article.tva); let utilise = new FormControl(article.utilise);
        let inventaire = new FormControl(article.inventaire); let acommander = new FormControl(article.acommander);

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