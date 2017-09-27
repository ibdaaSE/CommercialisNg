import { Routes } from '@angular/router';
import { StockComponent } from "app/article/stock.component";
import { ClientFournisseurComponent } from "app/clientFournisseur/cf.component";
import { NewArticleComponent } from 'app/article/new.article.component';

export const appRoutes: Routes = [
    { path: 'stock/new',component :NewArticleComponent},
    { path: 'stock', component: StockComponent },
    { path: 'clientFournisseur', component: ClientFournisseurComponent },
    { path: '', redirectTo: '/stock', pathMatch: 'full' }
    
]