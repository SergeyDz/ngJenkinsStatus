import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GCINST } from './gc-inst';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-gc-inst',
  templateUrl: './gc-inst.component.html',
  styleUrls: ['./gc-inst.component.scss']
})

export class GcInstComponent implements OnInit {
  url: string = 'http://sonar.paas.sbtech.com/service/popstatusapi/instances';
  instances: GCINST[];

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.getInst();
    IntervalObservable.create(10000)
      .subscribe(() => {
        this.getInst();
      });
  }

  getInst(): void {
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => this.instances = data);
  }


}