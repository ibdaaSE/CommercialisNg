import { Component, Input, OnInit, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CfService } from 'app/services/cf.service';
import { JQueryService } from "app/services/JQuery.service";
import { ICF } from 'app/shared/models';


declare let Materialize: any;

@Component({
  selector: 'clientFournisseur',
  templateUrl: './cf.component.html',
  styleUrls: ['./cf.component.css']
})
export class ClientFournisseurComponent implements OnInit {

  filter: string
  filterAttribute: string
  advancedFilter: string
  pageIndex: number
  pageLength: number

  cfsCount: number
  cfs: ICF[]
  selectedCF: ICF

  constructor(private cfService: CfService
    , private jQueryService: JQueryService
    , private router: Router) {
  }

  ngOnInit() {
    this.filter = '';
    this.filterAttribute = '';
    this.advancedFilter = '-1';
    this.pageIndex = 0;
    this.pageLength = 20;
    this.cfsCount = 0;
    this.getCFs();
    this.updateCFsCount();
  }

  getCFs() {
    let observable = this.cfService.getCFs(this.filter, this.pageIndex,
      this.filterAttribute, this.advancedFilter);
    observable.subscribe(cfs => {
      this.cfs = cfs;
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.pageIndex = 0;
    this.getCFs();
    this.updateCFsCount();
  }

  setAdvancedFilter(filterAttribute: string, advancedFilter: string) {
    this.filterAttribute = filterAttribute;
    this.advancedFilter = advancedFilter;
    this.pageIndex = 0;
    this.getCFs();
    this.updateCFsCount();
  }

  getNextPage() {
    if (!this.hasNextPage()) return;
    this.pageIndex = (this.pageIndex + this.pageLength);
    this.getCFs();
  }

  getPreviousPage() {
    if (!this.hasPreviousPage()) return;
    this.pageIndex = (this.pageIndex - this.pageLength);
    this.getCFs();
  }

  hasNextPage() {
    return (this.cfsCount >= (this.pageIndex + this.pageLength))
  }

  hasPreviousPage() {
    return (this.pageIndex > 0)
  }

  updateCFsCount() {
    let observable = this.cfService.countCFs(this.filter, this.filterAttribute, this.advancedFilter);
    observable.subscribe(count => {
      this.cfsCount = +count;
    });
  }

  setSelectedArticle(selectedCF: any) {
    this.selectedCF = selectedCF
    if (this.selectedCF === null) return;
    this.jQueryService.openModal("cf-details-dialog")
  }

  deletedArticles(message: String) {
    Materialize.toast(message, 4000)
    this.getCFs();
  }

  newCF() {
    this.router.navigate(['/clientFournisseur/new']);
  }

}