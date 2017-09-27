import { Component, Input, OnInit, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from "app/services/article.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { JQueryService } from "app/services/JQuery.service";
import { Router } from '@angular/router';
import { IArticle } from 'app/shared/models';

declare let Materialize: any;

@Component({
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  filter: string
  filterAttribute: string
  advancedFilter: string
  pageIndex: number
  pageLength: number

  articlesCount: number
  articles: IArticle[]
  selectedArticle: any

  constructor(
    private articleService: ArticleService,
    private jQueryService: JQueryService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.filter = '';
    this.filterAttribute = '';
    this.advancedFilter = '-1';
    this.pageIndex = 0;
    this.pageLength = 20;
    this.articlesCount = 0;
    this.getArticles();
    this.updateArticlesCount();
  }

  getArticles() {
    let observable = this.articleService.getArticles(this.filter, this.pageIndex,
      this.filterAttribute, this.advancedFilter);
    observable.subscribe(articles => {
      this.articles = articles;
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.pageIndex = 0;
    this.getArticles();
    this.updateArticlesCount();
  }

  setAdvancedFilter(filterAttribute: string, advancedFilter: string) {
    this.filterAttribute = filterAttribute;
    this.advancedFilter = advancedFilter;
    this.pageIndex = 0;
    this.getArticles();
    this.updateArticlesCount();
  }

  getNextPage() {
    if (!this.hasNextPage()) return;
    this.pageIndex = (this.pageIndex + this.pageLength);
    this.getArticles();
  }

  getPreviewPage() {
    if (!this.hasPreviewPage()) return;
    this.pageIndex = (this.pageIndex - this.pageLength);
    this.getArticles();
  }

  hasNextPage() {
    return (this.articlesCount >= (this.pageIndex + this.pageLength))
  }

  hasPreviewPage() {
    return (this.pageIndex > 0)
  }

  updateArticlesCount() {
    let observable = this.articleService.countArticles(this.filter, this.filterAttribute, this.advancedFilter);
    observable.subscribe(count => {
      this.articlesCount = +count;
    });
  }

  setSelectedArticle(selectedArticle: any) {
    this.selectedArticle = selectedArticle
    if (this.selectedArticle === null) return;
    this.jQueryService.openModal("article-details-dialog")
  }

  deletedArticles(message: String) {
    Materialize.toast(message, 4000)
    this.getArticles();
  }

  newArticle() {
    this.router.navigate(['/stock/new']);
  }


}