import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { JQueryService } from "app/services/JQuery.service";

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent{

    @Input() article:any
    constructor() { }

    

}