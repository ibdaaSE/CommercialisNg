import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { JQueryService } from "app/services/JQuery.service";
import { ArticleService } from 'app/services/article.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent{
    
    @Output() deleteEvent = new EventEmitter();
    @Input() article:any;
    constructor(private articleService : ArticleService ) { }

    deleteArticle(){
        
        this.articleService.deleteArticle(this.article.idArticle).catch(this.handleError).subscribe();
        this.deleteEvent.emit();
    }
    
    private handleError(error : Response){
        console.log(error.status);
        return Observable.throw(error.statusText);
    }

}