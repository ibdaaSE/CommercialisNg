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
    designation = new FormControl(); reference = new FormControl(); nomtech = new FormControl();
    categorie = new FormControl(); famille = new FormControl(); marque = new FormControl();
    codeBarres = new FormControl(); prixAchat = new FormControl(); prixPub = new FormControl();
    prixRev = new FormControl(); prixSpec = new FormControl(); qteStock = new FormControl();
    qteMin = new FormControl(); qteMax = new FormControl(); qteCarton = new FormControl();
    unite = new FormControl(); tva = new FormControl(); utilise = new FormControl();
    inventaire = new FormControl(); acommander = new FormControl();
    article: IArticle;
    constructor(private articleService: ArticleService,
        private router: Router, private route: ActivatedRoute
    ) { }

    ngOnInit() {
        
        this.articleForm = new FormGroup({
            designation: this.designation, reference: this.reference, nomtech: this.nomtech,
            categorie: this.categorie, famille: this.famille, marque: this.marque,
            codeBarres: this.codeBarres, prixAchat: this.prixAchat, prixPub: this.prixPub,
            prixRev: this.prixRev, prixSpec: this.prixSpec, qteStock: this.qteStock,
            qteMin: this.qteMin, qteMax: this.qteMax, qteCarton: this.qteCarton,
            unite: this.unite, tva: this.tva, utilise: this.utilise,
            inventaire: this.inventaire, acommander: this.acommander
        })

        this.articleService.getArticle(+this.route.snapshot.params['id']).subscribe(
            article => {
                this.initArticleForm(article);
            }
        );
    }

    initArticleForm(article: IArticle) {

        this.designation.setValue(article.designation);
        this.reference.setValue(article.reference);
        this.nomtech.setValue(article.nomtech); this.categorie.setValue(article.categorie);
        this.famille.setValue(article.famille); this.marque.setValue(article.marque);
        this.codeBarres.setValue(article.codeBarres); this.prixAchat.setValue(article.prixachat);
        this.prixPub.setValue(article.prixpublic); this.prixRev.setValue(article.prixrevendeur);
        this.prixSpec.setValue(article.prixspecial); this.qteStock.setValue(article.qtestock);
        this.qteMin.setValue(article.qtemin); this.qteMax.setValue(article.qtemax);
        this.qteCarton.setValue(article.qteCarton); this.unite.setValue(article.unite);
        this.tva.setValue(article.tva); this.utilise.setValue(article.utilise);
        this.inventaire.setValue(article.inventaire); this.acommander.setValue(article.acommander);
        
    }

    saveArticle(formValues) {

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