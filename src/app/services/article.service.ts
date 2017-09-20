import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

    constructor(private http : Http){
    }

    getArticles(filter:String, pageIndex:number, filterAttribute:string, advancedFilter:string):Observable<any[]> {
        console.log('/api/articles?filter=' + filter  + '&pageIndex=' + pageIndex
        + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter);
        
        return this.http.get('/api/articles?filter=' + filter  + '&pageIndex=' + pageIndex
        + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter)
        .map((response: Response) =>  response.json());
    }

    countArticles(filter:String, filterAttribute:string, advancedFilter:string):Observable<any[]> {
        return this.http.get('/api/articles/count?filter=' + filter 
        + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter)
        .map((response: Response) =>  response.json());
    }

}