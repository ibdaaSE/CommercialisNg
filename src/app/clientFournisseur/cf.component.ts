import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/services/article.service";

@Component({
  selector: 'clientFournisseur',
  templateUrl: './cf.component.html',
  styleUrls: ['./cf.component.css']
})
export class ClientFournisseurComponent implements OnInit {

  articles: any[]

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    //this.articles = this.articleService.getArticles();
  }
}