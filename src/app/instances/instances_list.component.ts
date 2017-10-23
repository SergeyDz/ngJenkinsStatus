import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { GCINST } from './data_struc';
import { InstancesDataService } from './instances-data.service';

import { Service } from './data_struc';
import { bm_s, kafka_s, lineserver_s, microservices_s, mongo_s, rabbitmq_s, sql_s } from './data';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app_instances_list',
  templateUrl: './instances_list.component.html',
  styleUrls: ['./instances_list.component.scss'],
  providers: [InstancesDataService]
})

export class InstancesComponent implements OnInit {
  instances: GCINST[] = [];
  instlist: GCINST[] = [];
  selectedMovie: any = {};
  services: Service[];
  selectedEnvironment: string;
  private timer;

  constructor(
    private InstancesDataService: InstancesDataService,
    private http: Http) { }

  SelectMovie(mv: any) {
    switch (mv.NAME.split("-").pop().toLowerCase()) {
      case "bm":
        this.services = bm_s;
        break;
      case "kafka":
        this.services = kafka_s;
        break;
      case "lineserver":
        this.services = lineserver_s;
        break;
      case "microservices":
        this.services = microservices_s;
        break;
      case "mongo":
        this.services = mongo_s;
        break;
      case "rabbitmq":
        this.services = rabbitmq_s;
        break;
      case "sql":
        this.services = sql_s;
        break;
    }
    if (this.services != null) {
      this.selectedMovie = mv;
      this.pingme(mv.EXTERNAL_IP)
      /// create update interval
      this.timer = setInterval(_ => {
        this.pingme(mv.EXTERNAL_IP)
      }, 20000);
    }
  }

  ClearMovieList() {
    clearInterval(this.timer);
    if (this.services != null) {
      this.services.map(service => service.PING = null);
      this.services = null;
    }
  }

  getInst(): void {
    this.InstancesDataService
      .getInstances()
      .then(results => {
        this.instlist = this.filtr(results);
        this.instances = results;
      });
  }

  filtr(arr) {
    var f = []
    return arr.filter((n) => f.indexOf(n.ID) == -1 && f.push(n.ID))
  }

  search(term: string) {
    if (this.selectedEnvironment != term) {
      this.selectedEnvironment = term;
      localStorage.setItem('sessionfilter', term);
    } else {
      localStorage.clear();
      this.selectedEnvironment = null;
    }
  }

  ngOnInit() {
    var sessionfilter = localStorage.getItem('sessionfilter');
    if (sessionfilter != null) {
      this.selectedEnvironment = sessionfilter;
    }
    this.getInst();
    // get our data every subsequent 10 seconds
    IntervalObservable.create(15000)
      .subscribe(() => {
        this.getInst();
      });
  }

  pingme(url) {
    this.services.map(service =>
      this.http.get(this.InstancesDataService.gcAPIUrl + "/" + url + "/" + service.PORT + "/" + service.TYPE + "/" + service.TIMEOUT + "")
        .map(res => res.json())
        .subscribe(data => { service.PING = data })
    )
  }

}