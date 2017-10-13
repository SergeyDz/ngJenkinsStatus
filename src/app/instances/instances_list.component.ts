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
  instances: GCINST[] = [];
  instlist: GCINST[] = [];
  selectedMovie: any = {};
  services: Service[];
  selectedEnvironment: string;

  constructor(
    private InstancesService: InstancesService) { }

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
    this.InstancesService
      .getMachineInstances()
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
    if(this.selectedEnvironment != term)
    {
      this.selectedEnvironment = term;
    } 
    else
    {
      this.selectedEnvironment = null;
    }
  }

  ngOnInit() {
    this.getInst();

    // get our data every subsequent 10 seconds
    IntervalObservable.create(10000)
      .subscribe(() => {
        this.getInst();
      });
  }
}