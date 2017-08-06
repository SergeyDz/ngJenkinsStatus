import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Build } from './build';
import { BuildService } from './build.service';

@Component({
  selector: 'app-builds',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})

export class BuildComponent implements OnInit {
  builds: Build[] = [];

  constructor(private buildService: BuildService) {
  }

  getBuilds(): void {
    this.buildService
      .getBuilds()
      .then(results => this.builds = results);
  }

  ngOnInit() {
    this.getBuilds();
  }

}
