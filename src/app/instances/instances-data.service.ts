import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { GCINST } from './data_struc';
import { Http } from '@angular/http';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstancesDataService {
  instances: Promise<GCINST[]>;
  gcAPIUrl = 'http://sonar.paas.sbtech.com/service/popstatusapi/instances';

  constructor(private http: Http) {
    
  }

  getInstances() :  Promise<GCINST[]> {
    return this.http.get(this.gcAPIUrl)
      .toPromise()
      .then(response => response.json() as GCINST[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
