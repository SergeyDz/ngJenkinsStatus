import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Build } from './build';
import { BuildService } from './build.service';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-builds',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})

export class BuildComponent implements OnInit {
  builds: Build[] = [];
  jenkinsUrl: string = "http://jenkins.paas.sbtech.com:8080/view/PaaS/job/";

  constructor(private buildService: BuildService) {
  }

  getBuilds(): void {
    this.buildService
      .getBuilds()
      .then(results => this.builds = results);
  }

  fixTimezoneToLocal(source): string {
    return source.endsWith('Z') ? source.replace('Z', '') : source;
  }

  getJobUrl(build): string {
    return this.jenkinsUrl + build.job + "/" + build.jobid;
  }

  getJobConsoleUrl(build): string {
    return this.getJobUrl(build) + "/console";
  }

  getJobRebuildUrl(build): string {
    return this.getJobUrl(build) + "/rebuild/parameterized";
  }

  ngOnInit() {
    this.getBuilds();

    // get our data every subsequent 10 seconds
    IntervalObservable.create(10000)
      .subscribe(() => {
        this.getBuilds();
      });
  }

  toUTCDate(date){
    var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    return _utc;
  };

}
