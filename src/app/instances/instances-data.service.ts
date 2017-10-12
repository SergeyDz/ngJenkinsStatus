import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { GCINST } from './data_struc';
import { Http } from '@angular/http';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstancesDataService {
  instances: Observable<GCINST[]>;

  constructor(private http: Http) {
    this.instances = this.http.get('http://localhost:8080/instances')
      .map(res => res.json());
  }


}
