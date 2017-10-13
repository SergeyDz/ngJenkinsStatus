import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Observable } from 'rxjs/Observable';
import { GCINST } from './data_struc';
import { InstancesService } from './instances.service';

import { Service } from './data_struc';
import { bm_s, kafka_s, lineserver_s, microservices_s, mongo_s, rabbitmq_s, sql_s } from './data';

@Component({
  selector: 'app_instances_list',
  templateUrl: './instances_list.component.html',
  styleUrls: ['./instances_list.component.scss'],
  providers: [InstancesService]
})

export class InstancesComponent implements OnInit {
  instances: Observable<GCINST[]>;
  instlist: Observable<GCINST[]>;
  selectedMovie: any = {};
  services: Service[];

  constructor(
    private InstancesService: InstancesService) { }

  ngOnInit(): void {
    this.InstancesService.setTitle();
    this.getInst();
    IntervalObservable.create(10000)
      .subscribe(() => {
        this.getInst()
      });
  }

  SelectMovie(mv: any) {
    this.selectedMovie = mv;
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
  }

  getInst(): void {
    //here need to check
    this.instlist = this.InstancesService.instances.map(data => this.filtr(data));
    if (sessionStorage.getItem('filter')) {
      this.InstancesService.search(sessionStorage.getItem('filter'));
      this.InstancesService.initial();
    };
    this.instances = this.InstancesService.instances.map(data => data.sort((a, b) => (a.STATUS === 'STOPPING' || a.STATUS === 'TERMINATED') ? -1 : 1));
  }

  filtr(arr) {
    var f = []
    return arr.filter((n) => f.indexOf(n.ID) == -1 && f.push(n.ID))
  }

  search(term: string) {
    this.InstancesService.search(term);
    sessionStorage.setItem('filter', term);
  }

}