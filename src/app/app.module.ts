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

@NgModule({
  declarations: [
    AppComponent, StockComponent, ArticleComponent, ArticleDetailComponent,
    ClientFournisseurComponent,NewArticleComponent
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
  providers: [ArticleService,JQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
