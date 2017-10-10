import { Routes } from '@angular/router';
import { StockComponent } from "app/article/stock.component";
import { ClientFournisseurComponent } from "app/clientFournisseur/cf.component";
import { NewArticleComponent } from 'app/article/newArticle.component';
import { EditArticleComponent } from 'app/article/editArticle.component';
import { ArticleResolver } from 'app/services/articleResolver.service';

export const appRoutes: Routes = [
    { path: 'stock/new', component: NewArticleComponent },
    { path: 'stock/edit/:id', component: EditArticleComponent},
    { path: 'stock', component: StockComponent },
    { path: 'clientFournisseur', component: ClientFournisseurComponent },
    { path: '', redirectTo: '/stock', pathMatch: 'full' }

]