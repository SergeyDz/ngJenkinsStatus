import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Build } from './build';


@Injectable()
export class BuildService {
  private heroesUrl = 'http://sonar.paas.sbtech.com/service/jenkinsstatusapi/builds';  // URL to web api
  constructor(private http: Http) { }

  getBuilds(size): Promise<Build[]> {
    return this.http.get(this.heroesUrl + "?size=" + size)
      .toPromise()
      .then(response => response.json() as Build[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
