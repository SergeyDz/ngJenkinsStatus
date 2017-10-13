import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { GCINST } from './data_struc';
import { InstancesDataService } from './instances-data.service';

@Injectable()
export class InstancesService {
  instances: Observable<GCINST[]>;
  private searchTerm = new Subject<string>();

  constructor(
    private title: Title,
    private InstancesDataService: InstancesDataService,
  ) {
    this.initial();
  }

  initial() {
    this.instances = this.InstancesDataService.instances
      .switchMap(inst =>
        this.searchTerm.map(term =>
          this.filter(inst, term)).startWith(inst));
  }

  setTitle() {
    this.title.setTitle('Google Instances list');
  }

  search(term: string) {
    if (term == null) {
      this.searchTerm = null;
    } else { this.searchTerm.next(term + '-'); }
  }

  private filter(inst: GCINST[], value: string) {
    return inst.filter(p => value ? p.NAME.toLowerCase().includes(value.toLowerCase()) : inst);
  }
}
