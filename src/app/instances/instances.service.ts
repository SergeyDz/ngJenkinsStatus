import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

import { GCINST } from './data_struc';
import { InstancesDataService } from './instances-data.service';

@Injectable()
export class InstancesService {

  // private searchTerm = new Subject<string>();
  // gcAPIUrl = this.InstancesDataService.gcAPIUrl;

  constructor(
    private InstancesDataService: InstancesDataService,
  ) {
    // this.getMachineInstances();
  }

  // getMachineInstances(): Promise<GCINST[]> {
  //   return this.InstancesDataService.getInstances();
  // }

  // search(term: string) {
  //   if (term == null) {
  //     this.searchTerm = null;
  //   } else {
  //     this.searchTerm.next(term + '-');
  //   }
  // }

  // private filter(inst: GCINST[], value: string) {
  //   return inst.filter(p => value ? p.NAME.toLowerCase().includes(value.toLowerCase()) : inst);
  // }
}
