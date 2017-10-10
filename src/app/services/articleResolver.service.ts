import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { IArticle } from 'app/shared/models';
import { ArticleService } from 'app/services/article.service';

@Injectable()
export class ArticleResolver implements Resolve<any>{

    constructor(private articleService: ArticleService,
        private route: ActivatedRoute) {
    }

    resolve() {
        console.log(this.route.snapshot.params['id']);
        
        return this.articleService.getArticle(+this.route.snapshot.params['id']).subscribe(
            article => article
        );
    }

}