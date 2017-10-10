import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { JQueryService } from "app/services/JQuery.service";
import { ArticleService } from 'app/services/article.service';
import { Observable } from 'rxjs/Observable';
import { IArticle } from 'app/shared/models';
import { Router } from '@angular/router';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent {

    @Output() deleteEvent = new EventEmitter();
    @Input() article: IArticle;
    constructor(private articleService: ArticleService,
        private jQuery: JQueryService,
        private router: Router) { }

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

    editArticle() {
        this.router.navigate(['/stock/edit',this.article.idArticle]);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}