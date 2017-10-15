import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ICF } from 'app/shared/models';
import { CfService } from 'app/services/cf.service';
import { JQueryService } from 'app/services/JQuery.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'singleCF-component',
    templateUrl: './singleCF.component.html',
    styleUrls: ['./singleCF.component.css']
})
export class SingleClientFournisseurComponent {

    @Output() deleteEvent = new EventEmitter();
    @Input() cf: ICF;

    constructor(private cfService: CfService,
        private jQuery: JQueryService,
        private router: Router) { }

    deleteCF() {
        this.cfService.deleteCF(this.cf.idClientFournisseur).catch(this.handleError).
            subscribe((val) => {
            },
            (err) => {
                this.deleteEvent.emit("failed");
            },
            () => {
                this.deleteEvent.emit("success");
            });

    }

    editCF() {
        this.router.navigate(['/clientFournisseur/edit', this.cf.idClientFournisseur]);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}