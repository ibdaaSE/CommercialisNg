import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { JQueryService } from "app/services/JQuery.service";

@Component({
    selector: 'article-details',
    templateUrl: 'articleDetail.component.html',
})

export class ArticleDetailComponent{
    @Input() article:any
    
    constructor(private jQueryService:JQueryService) { }

    dispose(){
        this.jQueryService.disposeModal("article-details-dialog");
    }
}