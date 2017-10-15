import { Routes } from '@angular/router';
import { StockComponent } from "app/article/stock.component";
import { ClientFournisseurComponent } from "app/clientFournisseur/cf.component";
import { NewArticleComponent } from 'app/article/newArticle.component';
import { EditArticleComponent } from 'app/article/editArticle.component';
import { ArticleResolver } from 'app/services/articleResolver.service';
import { NewCFComponent } from 'app/clientFournisseur/newCF.component';
import { EditCFComponent } from 'app/clientFournisseur/editCF.component';

export const appRoutes: Routes = [
    { path: 'stock/new', component: NewArticleComponent },
    { path: 'stock/edit/:id', component: EditArticleComponent},
    { path: 'stock', component: StockComponent },
    { path: 'clientFournisseur/new', component: NewCFComponent },
    { path: 'clientFournisseur/edit/:id', component: EditCFComponent},
    { path: 'clientFournisseur', component: ClientFournisseurComponent },
    { path: '', redirectTo: '/stock', pathMatch: 'full' }

]