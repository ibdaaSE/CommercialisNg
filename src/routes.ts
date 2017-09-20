import { Routes } from '@angular/router';
import { StockComponent } from "app/article/stock.component";
import { ClientFournisseurComponent } from "app/clientFournisseur/cf.component";

export const appRoutes:Routes = [
    {path : 'stock', component: StockComponent},
    {path: 'clientFournisseur', component: ClientFournisseurComponent},
    {path: '', redirectTo: '/stock', pathMatch:'full'}
]