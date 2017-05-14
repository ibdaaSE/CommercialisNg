import { Injectable } from '@angular/core';

declare var jQuery:any;

@Injectable()
export class JQueryService {

    constructor() { }

    openModal(id:string){
        jQuery('#' + id).modal('open')
    }

    disposeModal(id:string){
        jQuery('#' + id).modal('close')
    }
}