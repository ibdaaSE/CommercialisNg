import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { JQueryService } from "app/services/JQuery.service";
import { ArticleService } from 'app/services/article.service';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent{
    
    @Input() article:any
    constructor(private articleService : ArticleService ) {}

    deleteArticle(){
        this.articleService.deleteArticle(this.article.idArticle);
    }
    

}