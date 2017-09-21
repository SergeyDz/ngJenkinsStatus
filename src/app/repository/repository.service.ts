import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Repository } from './repository';

@Injectable()
export class RepositoryService {
  private url = 'http://sonar.paas.sbtech.com/service/jenkinsstatusapi/repositories';  // URL to web api
  constructor(private http: Http) { }

  getRepositories(): Promise<Repository[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Repository[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
