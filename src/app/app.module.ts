import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { StockComponent } from "app/article/stock.component";
import { ArticleComponent } from "app/article/article.component";
import { ClientFournisseurComponent } from "app/clientFournisseur/cf.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "routes";
import { ArticleService } from "app/services/article.service";
import { ArticleDetailComponent } from "app/article/articleDetail.component";
import { JQueryService } from "app/services/JQuery.service";
import { NewArticleComponent } from 'app/article/newArticle.component';
import { EditArticleComponent } from 'app/article/editArticle.component';
import { ArticleResolver } from 'app/services/articleResolver.service';
import { CfService } from 'app/services/cf.service';
import { SingleClientFournisseurComponent } from 'app/clientFournisseur/singleCF.component';
import { NewCFComponent } from 'app/clientFournisseur/newCF.component';
import { EditCFComponent } from 'app/clientFournisseur/editCF.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent, ArticleComponent, ArticleDetailComponent,
    NewArticleComponent, EditArticleComponent,
    ClientFournisseurComponent, SingleClientFournisseurComponent,
    NewCFComponent,EditCFComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ArticleService, CfService, JQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
