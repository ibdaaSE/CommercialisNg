import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ICF } from 'app/shared/models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CfService {

    constructor(private http: Http) {
    }

    getCFs(filter: String, pageIndex: number, filterAttribute: string, advancedFilter: string): Observable<ICF[]> {
        console.log('/api/filteredCFs?filter=' + filter + '&pageIndex=' + pageIndex
            + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter);

        return this.http.get('/api/filteredCFs?filter=' + filter + '&pageIndex=' + pageIndex
            + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter)
            .map((response: Response) => response.json());
    }

    countCFs(filter: String, filterAttribute: string, advancedFilter: string): Observable<ICF[]> {
        return this.http.get('/api/CFs/count?filter=' + filter
            + '&filterAttribute=' + filterAttribute + '&advancedFilter=' + advancedFilter)
            .map((response: Response) => response.json());
    }

    deleteCF(id: number): Observable<any> {
        return this.http.delete('/api/CFs/' + id);
    }

    saveCF(cf: ICF): Observable<ICF> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/api/CFs', cf, options).map((response: Response) => <ICF>response.json());;
    }

    editCF(cf: ICF): Observable<ICF> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('/api/CFs/' + cf.idClientFournisseur, cf, options).map((response: Response) => <ICF>response.json());
    }

    getCF(id: number): Observable<ICF> {
        return this.http.get('/api/CFs/' + id).map((response: Response) => <ICF>response.json());
    }


}