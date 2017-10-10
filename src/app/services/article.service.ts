import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IArticle } from 'app/shared/models';

@Injectable()
export class ArticleService {

    constructor(private http: Http) {
    }

    getArticles(filter: String, pageIndex: number, filterAttribute: string, advancedFilter: string): Observable<IArticle[]> {
        console.log('/api/filteredArticles?filter=' + filter + '&pageIndex=' + pageIndex
            + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter);

        return this.http.get('/api/filteredArticles?filter=' + filter + '&pageIndex=' + pageIndex
            + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter)
            .map((response: Response) => response.json());
    }

    countArticles(filter: String, filterAttribute: string, advancedFilter: string): Observable<IArticle[]> {
        return this.http.get('/api/articles/count?filter=' + filter
            + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter)
            .map((response: Response) => response.json());
    }

    deleteArticle(id: number): Observable<any> {
        return this.http.delete('/api/articles/' + id);
    }

    saveArticle(article: IArticle) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/api/articles', article, options).subscribe();
    }

    getArticle(id : number): Observable<IArticle> {

        return this.http.get('/api/articles/' + id).map((response: Response) => <IArticle>response.json());
    }

}