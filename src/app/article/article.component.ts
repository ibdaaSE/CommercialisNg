import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { JQueryService } from "app/services/JQuery.service";
import { ArticleService } from 'app/services/article.service';
import { Observable } from 'rxjs/Observable';
import { IArticle } from 'app/shared/models';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent {

    @Output() deleteEvent = new EventEmitter();
    @Input() article: IArticle;
    constructor(private articleService: ArticleService, private jQuery:JQueryService) { }

    deleteArticle() {
        this.articleService.deleteArticle(this.article.idArticle).catch(this.handleError).
            subscribe((val) => {
            },
            (err) => {
                this.deleteEvent.emit("failed");
            },
            () => {
                this.deleteEvent.emit("success");
            });

    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    openDropdown(id:string){
        this.jQuery.openDropdown(id);
    } 

}