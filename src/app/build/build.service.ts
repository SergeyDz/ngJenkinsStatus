import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Build } from './build';


@Injectable()
export class BuildService {
  private heroesUrl = 'http://localhost:8080/builds';  // URL to web api
  constructor(private http: Http) { }

  getBuilds(): Promise<Build[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Build[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
